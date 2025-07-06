import { spawn } from 'node:child_process'
import { appendFile, readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import glob from 'fast-glob'
import fse from 'fs-extra'
import { gzipSizeSync } from 'gzip-size'
import { markdownTable } from 'markdown-table'
import color from 'picocolors'
import puppeteer from 'puppeteer'
import { logger } from 'rslog'
import stringWidth from 'string-width'
import kill from 'tree-kill'

async function coolDown() {
  if (global.gc) {
    global.gc()
  }
  const COOL_DOWN_TIME = 3000
  await new Promise((resolve) => setTimeout(resolve, COOL_DOWN_TIME))
}

const require = createRequire(import.meta.url)
const __dirname = import.meta.dirname

const startConsole = "console.log('Benchmark Start Time', Date.now());"
const startConsoleRegex = /Benchmark Start Time (\d+)/

const caseName = process.env.CASE ?? 'medium'
process.env.CASE = caseName

class BuildTool {
  constructor({ name, port, startScript, startedRegex, buildScript, binFilePath }) {
    this.name = name
    this.port = port
    this.startScript = startScript
    this.startedRegex = startedRegex
    this.buildScript = buildScript
    this.binFilePath = path.join(process.cwd(), 'node_modules', binFilePath)
    this.hackBinFile()
  }

  cleanCache() {
    try {
      fse.removeSync('./node_modules/.cache')
      fse.removeSync('./node_modules/.vite')
      fse.removeSync('./node_modules/.farm')
    } catch {}
  }

  // Add a `console.log('Benchmark start', Date.now())` to the bin file's second line
  hackBinFile() {
    logger.info(
      'Setup bin file for',
      color.green(this.name),
      color.dim(`(${this.binFilePath.split('node_modules/')[1]})`),
    )

    const binFileContent = readFileSync(this.binFilePath, 'utf-8')

    if (!binFileContent.includes(startConsole)) {
      const lines = binFileContent.split('\n')
      lines.splice(1, 0, startConsole)
      writeFileSync(this.binFilePath, lines.join('\n'))
    }
  }

  async startServer() {
    this.cleanCache()

    logger.log('')
    logger.start(`Running start command: ${color.bold(color.yellow(this.startScript))}`)
    return new Promise((resolve, reject) => {
      const child = spawn(`node --run ${this.startScript}`, {
        stdio: ['pipe'],
        shell: true,
        env: {
          ...process.env,
          NO_COLOR: '1',
        },
      })
      this.child = child
      let startTime = null

      child.stdout.on('data', (data) => {
        const text = data.toString()

        if (process.env.DEBUG) {
          console.log(text)
        }

        const startMatch = startConsoleRegex.exec(text)
        if (startMatch) {
          startTime = startMatch[1]
        }

        const match = this.startedRegex.exec(text)
        if (match) {
          if (!startTime) {
            throw new Error('Start time not found')
          }
          const time = Date.now() - startTime

          resolve(time)
        }
      })

      child.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`)
      })

      child.on('error', (error) => {
        logger.error(`${error.message}`)
        reject(error)
      })
      child.on('exit', (code) => {
        if (code !== 0 && code !== null) {
          logger.error(
            `(${this.name} run ${this.startScript} failed) child process exited with code ${code}`,
          )
          reject(code)
        }
      })
    })
  }

  async stopServer() {
    if (!this.child) {
      return
    }

    const child = this.child

    return new Promise((resolve) => {
      const cleanup = () => {
        try {
          // Remove all listeners to prevent memory leaks
          if (child) {
            child.removeAllListeners()

            // Destroy streams safely
            if (child.stdout && !child.stdout.destroyed) {
              child.stdout.destroy()
            }
            if (child.stderr && !child.stderr.destroyed) {
              child.stderr.destroy()
            }
          }
        } catch {
          // Ignore cleanup errors
        }

        this.child = null
        resolve(undefined)
      }

      // Set a timeout to force cleanup if the process doesn't exit gracefully
      const forceKillTimeout = setTimeout(() => {
        logger.warn(`Force killing process for ${this.name}`)
        cleanup()
      }, 5000)

      // Listen for process exit
      child.on('exit', () => {
        clearTimeout(forceKillTimeout)
        cleanup()
      })

      // Kill the process tree
      if (child.pid) {
        kill(child.pid, (err) => {
          if (err) {
            logger.warn(`Failed to kill process ${child.pid}: ${err.message}`)
            clearTimeout(forceKillTimeout)
            cleanup()
          }
        })
      } else {
        // If no PID, just cleanup immediately
        clearTimeout(forceKillTimeout)
        cleanup()
      }
    })
  }

  async build() {
    this.cleanCache()

    logger.log('')
    logger.start(`Running build command: ${color.bold(color.yellow(this.buildScript))}`)
    const child = spawn(`node --run ${this.buildScript}`, {
      stdio: ['pipe'],
      shell: true,
      env: {
        ...process.env,
        NO_COLOR: '1',
      },
    })
    const startTime = Date.now()

    return new Promise((resolve, reject) => {
      let actualBuildTime = null
      let outputBuffer = ''

      // Add timeout to prevent hanging builds
      const buildTimeout = setTimeout(
        () => {
          logger.warn(`Build timeout for ${this.name}, killing process...`)
          if (child.pid) {
            kill(child.pid, (err) => {
              if (err) {
                logger.warn(`Failed to kill build process ${child.pid}: ${err.message}`)
              }
            })
          }
          reject(new Error('Build timeout after 3 minutes'))
        },
        3 * 60 * 1000,
      ) // 3 minutes timeout

      // Capture stdout to extract build time
      child.stdout.on('data', (data) => {
        const text = data.toString()
        outputBuffer += text

        if (process.env.DEBUG) {
          console.log(`${this.name} stdout: ${text}`)
        }

        // Extract actual build time from different bundlers
        actualBuildTime = this.extractBuildTime(text) || actualBuildTime
      })

      child.on('exit', (code) => {
        clearTimeout(buildTimeout)
        if (code === 0) {
          const totalTime = Date.now() - startTime

          // If we couldn't extract build time from stdout, try from the full buffer
          if (!actualBuildTime) {
            actualBuildTime = this.extractBuildTime(outputBuffer)
          }

          resolve({
            totalTime,
            actualBuildTime: actualBuildTime || totalTime, // fallback to total time
            prepTime: actualBuildTime ? totalTime - actualBuildTime : 0,
          })
        } else {
          reject(new Error(`Build failed with exit code ${code}`))
        }
      })

      child.on('error', (error) => {
        clearTimeout(buildTimeout)
        reject(error)
      })

      // Log stderr for debugging
      child.stderr.on('data', (data) => {
        if (process.env.DEBUG) {
          console.log(`${this.name} stderr: ${data}`)
        }
      })
    })
  }

  // Extract actual build time from bundler output
  extractBuildTime(text) {
    // Farm: Build completed in 353ms
    const farmMatch = text.match(/Build completed in (\d+(?:\.\d+)?)\s*(ms|s)/i)
    if (farmMatch) {
      const time = Number.parseFloat(farmMatch[1])
      const unit = farmMatch[2].toLowerCase()
      return unit === 's' ? time * 1000 : time
    }

    // Rsbuild, Vite, Unpack: built in 167ms / built in 0.22 s
    const builtInMatch = text.match(/built in (\d+(?:\.\d+)?)\s*(ms|s)/i)
    if (builtInMatch) {
      const time = Number.parseFloat(builtInMatch[1])
      const unit = builtInMatch[2].toLowerCase()
      return unit === 's' ? time * 1000 : time
    }
    // Webpack & Rspack: in 1234 ms
    const webpackMatch = text.match(/ in (\d+(?:\.\d+)?)\s*(ms|s)/i)
    if (webpackMatch) {
      const time = Number.parseFloat(webpackMatch[1])
      const unit = webpackMatch[2].toLowerCase()
      return unit === 's' ? time * 1000 : time
    }
    return null
  }
}

const parseToolNames = () => {
  const allTools = ['rspack', 'rsbuild', 'unpack', 'rolldown-vite', 'vite', 'webpack', 'farm']

  if (process.env.TOOLS === 'all') {
    return allTools
  }
  if (process.env.TOOLS) {
    return process.env.TOOLS?.split(',').map((item) => item.toLowerCase())
  }

  const defaultTools = ['rsbuild', 'unpack', 'rolldown-vite', 'farm']
  return defaultTools
}

const toolNames = parseToolNames()
const buildTools = []

toolNames.forEach((name) => {
  switch (name) {
    case 'rspack':
      buildTools.push(
        new BuildTool({
          name: 'Rspack CLI ' + require('@rspack/core/package.json').version,
          port: 8080,
          startScript: 'start:rspack',
          startedRegex: /in (.+) (s|ms)/,
          buildScript: 'build:rspack',
          binFilePath: '@rspack/cli/bin/rspack.js',
        }),
        new BuildTool({
          name: 'Rspack CLI (Lazy) ' + require('@rspack/core/package.json').version,
          port: 8080,
          startScript: 'start:rspack:lazy',
          startedRegex: /in (.+) (s|ms)/,
          buildScript: 'build:rspack',
          binFilePath: '@rspack/cli/bin/rspack.js',
        }),
      )
      break
    case 'rsbuild':
      buildTools.push(
        new BuildTool({
          name: 'Rsbuild ' + require('@rsbuild/core/package.json').version,
          port: 3333,
          startScript: 'start:rsbuild:lazy',
          startedRegex: /in (.+) (s|ms)/,
          buildScript: 'build:rsbuild',
          binFilePath: '@rsbuild/core/bin/rsbuild.js',
        }),
      )
      break
    case 'vite':
      buildTools.push(
        new BuildTool({
          name: 'Vite (SWC) ' + require('vite/package.json').version,
          port: 5173,
          startScript: 'start:vite',
          startedRegex: /ready in (\d+) (s|ms)/,
          buildScript: 'build:vite',
          binFilePath: 'vite/bin/vite.js',
        }),
      )
      break
    case 'rolldown-vite':
      buildTools.push(
        new BuildTool({
          name: 'Vite (Rolldown) ' + require('rolldown-vite/package.json').version,
          port: 5173,
          startScript: 'start:rolldown-vite',
          startedRegex: /ready in (\d+) (s|ms)/,
          buildScript: 'build:rolldown-vite',
          binFilePath: 'rolldown-vite/bin/vite.js',
        }),
      )
      break
    case 'webpack':
      buildTools.push(
        new BuildTool({
          name: 'webpack (SWC) ' + require('webpack/package.json').version,
          port: 8082,
          startScript: 'start:webpack',
          startedRegex: /compiled .+ in (.+) (s|ms)/,
          buildScript: 'build:webpack',
          binFilePath: 'webpack-cli/bin/cli.js',
        }),
      )
      break
    case 'farm':
      buildTools.push(
        new BuildTool({
          name: 'Farm ' + require('@farmfe/core/package.json').version,
          port: 9000,
          startScript: 'start:farm',
          startedRegex: /Ready in (.+)(s|ms)/,
          buildScript: 'build:farm',
          binFilePath: '@farmfe/cli/bin/farm.mjs',
        }),
      )
      break
    case 'unpack':
      buildTools.push(
        new BuildTool({
          name: 'Unpack ' + require('@unpackjs/core/package.json').version,
          port: 4000,
          startScript: 'start:unpack:lazy',
          startedRegex: /ready in (\d+)ms/,
          buildScript: 'build:unpack',
          binFilePath: '@unpackjs/cli/bin/index.js',
        }),
        new BuildTool({
          name: 'Unpack (Prebundle) ' + require('@unpackjs/core/package.json').version,
          port: 4000,
          startScript: 'start:unpack:prebundle',
          startedRegex: /ready in (\d+)ms/,
          buildScript: 'build:unpack',
          binFilePath: '@unpackjs/cli/bin/index.js',
        }),
        new BuildTool({
          name: 'Unpack (Prebundle + CSS) ' + require('@unpackjs/core/package.json').version,
          port: 4000,
          startScript: 'start:unpack:experiments',
          startedRegex: /ready in (\d+)ms/,
          buildScript: 'build:unpack',
          binFilePath: '@unpackjs/cli/bin/index.js',
        }),
      )
      break
  }
})

const browser = await puppeteer.launch()
const { WARMUP_TIMES, RUN_TIMES } = process.env
const warmupTimes = WARMUP_TIMES ? Number(WARMUP_TIMES) : 2
const runTimes = RUN_TIMES ? Number(RUN_TIMES) : 3
const totalTimes = warmupTimes + runTimes

logger.log('')
logger.info(
  'Benchmark case ' +
    color.green(`"${caseName}"`) +
    ' will run ' +
    color.green(warmupTimes + ' warmup') +
    ' + ' +
    color.green(runTimes + ' measured') +
    ' times',
)

let perfResults = []
const sizeResults = {}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

for (let i = 0; i < totalTimes; i++) {
  await runBenchmark()
}

async function runBenchmark() {
  const perfResult = {}
  // Shuffle the build tools to avoid the cache effect
  const shuffledBuildTools = shuffleArray([...buildTools])

  for (const buildTool of shuffledBuildTools) {
    let page = null // Declare page variable outside try block for error handling
    try {
      const time = await buildTool.startServer()
      page = await browser.newPage()
      const start = Date.now()

      page.on('load', () => {
        const loadTime = Date.now() - start
        logger.success(
          color.dim(buildTool.name) + ' startup in ' + color.green(time + loadTime + 'ms'),
        )

        if (!perfResult[buildTool.name]) {
          perfResult[buildTool.name] = {}
        }

        perfResult[buildTool.name].startup = time + loadTime
        perfResult[buildTool.name].serverStart = time
        perfResult[buildTool.name].onLoad = loadTime
      })

      logger.info(color.dim('navigating to' + ` http://localhost:${buildTool.port}`))

      await page.goto(`http://localhost:${buildTool.port}`, {
        timeout: 180000,
      })

      let waitResolve = null
      const waitPromise = new Promise((resolve) => {
        waitResolve = resolve
      })

      let hmrRootStart = -1
      let hmrLeafStart = -1

      page.on('console', (event) => {
        const isFinished = () => {
          return perfResult[buildTool.name]?.rootHmr && perfResult[buildTool.name]?.leafHmr
        }
        if (event.text().includes('root hmr')) {
          const match = /(\d+)/.exec(event.text())
          if (!match) {
            throw new Error('Failed to match root HMR time.')
          }

          const clientDateNow = Number(match[1])
          const hmrTime = clientDateNow - hmrRootStart
          logger.success(color.dim(buildTool.name) + ' root HMR in ' + color.green(hmrTime + 'ms'))

          perfResult[buildTool.name].rootHmr = hmrTime
          if (isFinished()) {
            page.close()
            waitResolve()
          }
        } else if (event.text().includes('leaf hmr')) {
          const match = /(\d+)/.exec(event.text())
          if (!match) {
            throw new Error('Failed to match leaf HMR time.')
          }

          const clientDateNow = Number(match[1])
          const hmrTime = clientDateNow - hmrLeafStart
          logger.success(color.dim(buildTool.name) + ' leaf HMR in ' + color.green(hmrTime + 'ms'))
          perfResult[buildTool.name].leafHmr = hmrTime
          if (isFinished()) {
            page.close()
            waitResolve()
          }
        }
      })

      await new Promise((resolve) => setTimeout(resolve, 2000))
      const rootFilePath = path.join(__dirname, 'src', caseName, 'f0.jsx')
      const originalRootFileContent = readFileSync(rootFilePath, 'utf-8')

      appendFile(
        rootFilePath,
        `
    console.log('root hmr', Date.now());
    `,
        (err) => {
          if (err) throw err
          hmrRootStart = Date.now()
        },
      )

      await new Promise((resolve) => setTimeout(resolve, 2000))

      const leafFilePath = path.join(__dirname, 'src', caseName, 'd0/d0/d0/f0.jsx')
      const originalLeafFileContent = readFileSync(leafFilePath, 'utf-8')
      appendFile(
        leafFilePath,
        `
      console.log('leaf hmr', Date.now());
      `,
        (err) => {
          if (err) throw err
          hmrLeafStart = Date.now()
        },
      )

      await waitPromise

      // restore files
      writeFileSync(rootFilePath, originalRootFileContent)
      writeFileSync(leafFilePath, originalLeafFileContent)

      await buildTool.stopServer()

      await coolDown()
      logger.success(color.dim(buildTool.name) + ' dev server closed')

      // Clean up dist dir
      const distDir = path.join(__dirname, 'dist')
      await fse.remove(distDir)

      try {
        const buildResult = await buildTool.build()

        const sizes = sizeResults[buildTool.name] || (await getFileSizes(distDir))
        sizeResults[buildTool.name] = sizes

        logger.success(
          color.dim(buildTool.name) + ' built in ' + color.green(buildResult.totalTime + ' ms'),
        )
        logger.success(
          color.dim(buildTool.name) +
            ' actual build: ' +
            color.green(Math.round(buildResult.actualBuildTime) + ' ms'),
        )
        logger.success(
          color.dim(buildTool.name) +
            ' prep time: ' +
            color.green(Math.round(buildResult.prepTime) + ' ms'),
        )
        logger.success(color.dim(buildTool.name) + ' total size: ' + color.green(sizes.totalSize))
        logger.success(
          color.dim(buildTool.name) + ' gzipped size: ' + color.green(sizes.totalGzipSize),
        )

        perfResult[buildTool.name].prodBuild = Math.round(buildResult.actualBuildTime)
        perfResult[buildTool.name].prepTime = Math.round(buildResult.prepTime)
        perfResult[buildTool.name].totalBuildTime = buildResult.totalTime
      } catch (buildError) {
        logger.error(color.red(`${buildTool.name} build failed:`) + ` ${buildError.message}`)
        perfResult[buildTool.name].prodBuild = 'Failed'
        perfResult[buildTool.name].prepTime = 'Failed'
        perfResult[buildTool.name].totalBuildTime = 'Failed'
        sizeResults[buildTool.name] = {
          totalSize: 'Failed',
          totalGzipSize: 'Failed',
        }
      }

      await coolDown()
    } catch (error) {
      logger.error(color.red(`${buildTool.name} failed:`) + ` ${error.message}`)

      // Ensure page is closed and server is stopped in case of error
      try {
        if (page && !page.isClosed()) {
          await page.close()
        }
      } catch (pageError) {
        logger.warn(`Failed to close page for ${buildTool.name}: ${pageError.message}`)
      }

      try {
        await buildTool.stopServer()
      } catch (stopError) {
        logger.warn(`Failed to stop server for ${buildTool.name}: ${stopError.message}`)
      }

      // Still do cooldown to avoid affecting next tool
      await coolDown()
    }
  }

  perfResults.push(perfResult)
}

// fast-glob only accepts posix path
// https://github.com/mrmlnc/fast-glob#convertpathtopatternpath
function convertPath(path) {
  if (process.platform === 'win32') {
    return glob.convertPathToPattern(path)
  }
  return path
}

function calcFileSize(len) {
  const val = len / 1000
  return `${val.toFixed(val < 1 ? 2 : 1)}kB`
}

async function getFileSizes(targetDir) {
  try {
    let files = await glob(convertPath(path.join(targetDir, '**/*')))
    let totalSize = 0
    let totalGzipSize = 0

    files = files.filter((file) => {
      return !(file.endsWith('.map') || file.endsWith('.LICENSE.txt'))
    })

    await Promise.all(
      files.map(async (file) => {
        try {
          const content = await fse.readFile(file, 'utf-8')
          totalSize += Buffer.byteLength(content)
          totalGzipSize += gzipSizeSync(content)
        } catch (error) {
          logger.warn(`Failed to read file ${file}: ${error.message}`)
          // Continue processing other files
        }
      }),
    )

    return {
      totalSize: calcFileSize(totalSize),
      totalGzipSize: calcFileSize(totalGzipSize),
    }
  } catch (error) {
    logger.error(`Failed to get file sizes from ${targetDir}: ${error.message}`)
    return {
      totalSize: 'Error',
      totalGzipSize: 'Error',
    }
  }
}

// average results
const averageResults = {}
const averageResultsNumbers = {}

// drop the warmup results
perfResults = perfResults.slice(warmupTimes)

// Check if we have any valid results
if (perfResults.length === 0) {
  logger.error('No valid performance results to process')
  process.exit(1)
}

for (const result of perfResults) {
  for (const [name, values] of Object.entries(result)) {
    if (!averageResults[name]) {
      averageResults[name] = {}
      averageResultsNumbers[name] = {}
    }

    for (const [key, value] of Object.entries(values)) {
      if (!averageResults[name][key]) {
        averageResults[name][key] = 0
        averageResultsNumbers[name][key] = 0
      }

      // Only process numeric values, skip 'Failed' strings
      if (
        typeof value === 'number' ||
        (typeof value === 'string' && !Number.isNaN(Number(value)))
      ) {
        averageResults[name][key] += Number(value)
        averageResultsNumbers[name][key] += Number(value)
      }
    }
  }
}

for (const [name, values] of Object.entries(averageResults)) {
  for (const [key, value] of Object.entries(values)) {
    if (value > 0) {
      // Only calculate average for values that have data
      const avgValue = Math.floor(value / perfResults.length)
      averageResultsNumbers[name][key] = avgValue
    } else {
      // Set to 'Failed' if no valid data was collected
      averageResultsNumbers[name][key] = 'Failed'
    }
  }
}

// Calculate multipliers and format with original time
function calculateAndFormatResults(results) {
  const metrics = [
    'startup',
    'serverStart',
    'onLoad',
    'rootHmr',
    'leafHmr',
    'prodBuild',
    'prepTime',
  ]
  const formattedResults = {}

  for (const metric of metrics) {
    // Find the minimum value for this metric
    let minValue = Number.POSITIVE_INFINITY
    for (const [, values] of Object.entries(results)) {
      if (values[metric] && typeof values[metric] === 'number' && values[metric] < minValue) {
        minValue = values[metric]
      }
    }

    // Skip if no valid values found
    if (minValue === Number.POSITIVE_INFINITY) {
      continue
    }

    // Format results with multipliers
    for (const [name, values] of Object.entries(results)) {
      if (!formattedResults[name]) {
        formattedResults[name] = {}
      }
      if (values[metric] && typeof values[metric] === 'number') {
        const multiplier = values[metric] / minValue
        const trophy = multiplier === 1 ? color.green(' ◆') : ''
        formattedResults[name][metric] = `${values[metric]}ms (${multiplier.toFixed(1)}x)${trophy}`
      } else {
        formattedResults[name][metric] = values[metric] || 'Failed'
      }
    }
  }

  return formattedResults
}

const formattedResults = calculateAndFormatResults(averageResultsNumbers)

// Format bundle sizes with multipliers
function formatBundleSizesWithMultipliers(sizeResults) {
  const formattedSizes = {}

  // Convert size strings to numbers for comparison
  const sizeNumbers = {}
  for (const [name, sizes] of Object.entries(sizeResults)) {
    // Skip failed entries
    if (
      sizes.totalSize === 'Failed' ||
      sizes.totalSize === 'Error' ||
      sizes.totalGzipSize === 'Failed' ||
      sizes.totalGzipSize === 'Error'
    ) {
      sizeNumbers[name] = {
        totalSize: 'Failed',
        totalGzipSize: 'Failed',
      }
      continue
    }

    const totalSize = Number.parseFloat(sizes.totalSize.replace('kB', ''))
    const totalGzipSize = Number.parseFloat(sizes.totalGzipSize.replace('kB', ''))

    if (Number.isNaN(totalSize) || Number.isNaN(totalGzipSize)) {
      sizeNumbers[name] = {
        totalSize: 'Failed',
        totalGzipSize: 'Failed',
      }
    } else {
      sizeNumbers[name] = {
        totalSize,
        totalGzipSize,
      }
    }
  }

  // Find minimum sizes (only from valid entries)
  let minTotalSize = Number.POSITIVE_INFINITY
  let minGzipSize = Number.POSITIVE_INFINITY
  for (const sizes of Object.values(sizeNumbers)) {
    if (typeof sizes.totalSize === 'number' && sizes.totalSize < minTotalSize) {
      minTotalSize = sizes.totalSize
    }
    if (typeof sizes.totalGzipSize === 'number' && sizes.totalGzipSize < minGzipSize) {
      minGzipSize = sizes.totalGzipSize
    }
  }

  // Format with multipliers
  for (const [name, sizes] of Object.entries(sizeNumbers)) {
    if (sizes.totalSize === 'Failed' || sizes.totalGzipSize === 'Failed') {
      formattedSizes[name] = {
        totalSize: 'Failed',
        totalGzipSize: 'Failed',
      }
    } else {
      const totalMultiplier =
        minTotalSize !== Number.POSITIVE_INFINITY ? sizes.totalSize / minTotalSize : 1
      const gzipMultiplier =
        minGzipSize !== Number.POSITIVE_INFINITY ? sizes.totalGzipSize / minGzipSize : 1

      const totalTrophy = totalMultiplier === 1 ? color.green(' ◆') : ''
      const gzipTrophy = gzipMultiplier === 1 ? color.green(' ◆') : ''

      formattedSizes[name] = {
        totalSize: `${sizes.totalSize}kB (${totalMultiplier.toFixed(1)}x)${totalTrophy}`,
        totalGzipSize: `${sizes.totalGzipSize}kB (${gzipMultiplier.toFixed(1)}x)${gzipTrophy}`,
      }
    }
  }

  return formattedSizes
}

const formattedSizes = formatBundleSizesWithMultipliers(sizeResults)

logger.log('')
logger.success('Benchmark finished!\n')

logger.info('Build performance:\n')
console.log(
  markdownTable(
    [
      [
        'Name',
        'Startup',
        'Server start',
        'Page load',
        'Root HMR',
        'Leaf HMR',
        'Prod build',
        'Prepare',
      ],
      ...buildTools.map(({ name }) => [
        name,
        formattedResults[name]?.startup || 'Failed',
        formattedResults[name]?.serverStart || 'Failed',
        formattedResults[name]?.onLoad || 'Failed',
        formattedResults[name]?.rootHmr || 'Failed',
        formattedResults[name]?.leafHmr || 'Failed',
        formattedResults[name]?.prodBuild || 'Failed',
        formattedResults[name]?.prepTime || 'Failed',
      ]),
    ],
    {
      stringLength: stringWidth,
    },
  ),
)

logger.log('')
logger.info('Bundle sizes:\n')
console.log(
  markdownTable(
    [
      ['Name', 'Total size', 'Gzipped size'],
      ...buildTools.map(({ name }) => [
        name,
        formattedSizes[name]?.totalSize || 'Failed',
        formattedSizes[name]?.totalGzipSize || 'Failed',
      ]),
    ],
    {
      stringLength: stringWidth,
    },
  ),
)

process.exit(0)
