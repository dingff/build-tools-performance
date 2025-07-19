import { spawn } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
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

logger.info('process.env.CI', process.env.CI)

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

      // Add timeout for server startup
      const startTimeout = setTimeout(
        () => {
          logger.warn(`Server startup timeout for ${this.name}, killing process...`)
          if (child.pid) {
            kill(child.pid, (err) => {
              if (err) {
                logger.warn(`Failed to kill startup process ${child.pid}: ${err.message}`)
              }
            })
          }
          reject(new Error('Server startup timeout after 3 minutes'))
        },
        3 * 60 * 1000,
      )

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

          clearTimeout(startTimeout)
          resolve(time)
        }
      })

      child.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`)
      })

      child.on('error', (error) => {
        logger.error(`${error.message}`)
        clearTimeout(startTimeout)
        reject(error)
      })
      child.on('exit', (code) => {
        if (code !== 0 && code !== null) {
          logger.error(
            `(${this.name} run ${this.startScript} failed) child process exited with code ${code}`,
          )
          clearTimeout(startTimeout)
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

    return new Promise((resolve, reject) => {
      let prodBuild = null
      let outputBuffer = ''
      let startTime = null

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
      )

      // Capture stdout to extract build time
      child.stdout.on('data', (data) => {
        const text = data.toString()
        outputBuffer += text

        if (process.env.DEBUG) {
          console.log(`${this.name} stdout: ${text}`)
        }

        // Extract start time from bin file output
        const startMatch = startConsoleRegex.exec(text)
        if (startMatch) {
          startTime = Number(startMatch[1])
        }

        // Extract prod build time from different bundlers
        prodBuild = this.extractBuildTime(text) || prodBuild
      })

      child.on('exit', (code) => {
        clearTimeout(buildTimeout)
        if (code === 0) {
          if (!startTime) {
            throw new Error('Build start time not found')
          }

          const totalBuild = Date.now() - startTime

          // If we couldn't extract build time from stdout, try from the full buffer
          if (!prodBuild) {
            prodBuild = this.extractBuildTime(outputBuffer)
          }

          resolve({
            totalBuild,
            prodBuild,
            prepare: totalBuild - prodBuild,
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

  // Extract prod build time from bundler output
  extractBuildTime(text) {
    // Next.js: Compiled successfully in 4.1s
    const nextMatch = text.match(/Compiled successfully in (\d+(?:\.\d+)?)\s*(ms|s)/i)
    if (nextMatch) {
      const time = Number.parseFloat(nextMatch[1])
      const unit = nextMatch[2].toLowerCase()
      return unit === 's' ? time * 1000 : time
    }

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

    // Rsbuild, Vite, Unpack with minutes: built in 1m 12s
    const builtInMinutesMatch = text.match(/built in (\d+)m\s*(\d+)\s*s/i)
    if (builtInMinutesMatch) {
      const minutes = Number.parseInt(builtInMinutesMatch[1])
      const seconds = Number.parseInt(builtInMinutesMatch[2])
      return (minutes * 60 + seconds) * 1000
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
  const allTools = [
    'rspack',
    'rsbuild',
    'unpack',
    'next',
    'farm',
    'rolldown-vite',
    'vite',
    'webpack',
  ]

  if (process.env.TOOLS === 'all') {
    return allTools
  }
  if (process.env.TOOLS) {
    return process.env.TOOLS?.split(',').map((item) => item.toLowerCase())
  }

  const defaultTools = ['rsbuild', 'unpack', 'next', 'farm', 'rolldown-vite', 'vite', 'webpack']
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
      )
      break
    case 'rsbuild':
      buildTools.push(
        new BuildTool({
          name: 'Rsbuild ' + require('@rsbuild/core/package.json').version,
          port: 3333,
          startScript: 'start:rsbuild',
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
          startScript: 'start:unpack',
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
        // new BuildTool({
        //   name: 'Unpack (Prebundle + CSS) ' + require('@unpackjs/core/package.json').version,
        //   port: 4000,
        //   startScript: 'start:unpack:experiments',
        //   startedRegex: /ready in (\d+)ms/,
        //   buildScript: 'build:unpack',
        //   binFilePath: '@unpackjs/cli/bin/index.js',
        // }),
      )
      break
    case 'next':
      buildTools.push(
        new BuildTool({
          name: 'Next.js (Turbopack) ' + require('next/package.json').version,
          port: 3200,
          startScript: 'start:next',
          startedRegex: /Ready in (\d+)ms/,
          buildScript: 'build:next',
          binFilePath: 'next/dist/bin/next',
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
          color.dim(buildTool.name) + ' dev cold start in ' + color.green(time + loadTime + 'ms'),
        )

        if (!perfResult[buildTool.name]) {
          perfResult[buildTool.name] = {}
        }

        perfResult[buildTool.name].devColdStart = time + loadTime
        perfResult[buildTool.name].serverStart = time
        perfResult[buildTool.name].onLoad = loadTime
      })

      logger.info(color.dim('navigating to' + ` http://localhost:${buildTool.port}`))

      await page.goto(`http://localhost:${buildTool.port}`, {
        timeout: 180000,
        waitUntil: 'networkidle0', // Wait for network to be idle
      })

      // Additional wait to ensure page is fully interactive before HMR tests
      await new Promise((resolve) => setTimeout(resolve, 3000))

      let waitResolve = null
      let waitReject = null
      const waitPromise = new Promise((resolve, reject) => {
        waitResolve = resolve
        waitReject = reject
      })

      // Add HMR timeout
      const hmrTimeoutDuration = 30000
      const hmrTimeout = setTimeout(() => {
        logger.warn(`HMR timeout for ${buildTool.name}, skipping HMR tests...`)
        if (!perfResult[buildTool.name]) {
          perfResult[buildTool.name] = {}
        }
        perfResult[buildTool.name].rootHmr = 'Failed'
        perfResult[buildTool.name].leafHmr = 'Failed'
        if (page && !page.isClosed()) {
          page.close()
        }
        waitReject(new Error('HMR timeout'))
      }, hmrTimeoutDuration)

      let hmrRootStart = -1
      let hmrLeafStart = -1

      // Ensure perfResult object is initialized
      if (!perfResult[buildTool.name]) {
        perfResult[buildTool.name] = {}
      }

      page.on('console', (event) => {
        const isFinished = () => {
          return (
            perfResult[buildTool.name]?.rootHmr !== undefined &&
            perfResult[buildTool.name]?.leafHmr !== undefined
          )
        }

        if (
          event.text().includes('root hmr') &&
          perfResult[buildTool.name]?.rootHmr === undefined
        ) {
          const match = /(\d+)/.exec(event.text())
          if (!match) {
            logger.warn(`${buildTool.name} failed to match root HMR time from: ${event.text()}`)
            perfResult[buildTool.name].rootHmr = 'Failed'
            return
          }

          // Check if hmrRootStart was properly set
          if (hmrRootStart === -1) {
            logger.warn(`${buildTool.name} root HMR start time not set, skipping measurement`)
            perfResult[buildTool.name].rootHmr = 'Failed'
          } else {
            // Since we're now using the file modification time in the console.log,
            // we calculate HMR time as the difference between when the event was processed
            // and when the file was modified
            const currentTime = Date.now()
            const hmrTime = currentTime - hmrRootStart
            // Sanity check for reasonable HMR time (should be less than 30 seconds)
            if (hmrTime < 0 || hmrTime > 30000) {
              logger.warn(`${buildTool.name} root HMR time seems invalid: ${hmrTime}ms`)
              perfResult[buildTool.name].rootHmr = 'Failed'
            } else {
              logger.success(
                color.dim(buildTool.name) + ' root HMR in ' + color.green(hmrTime + 'ms'),
              )
              perfResult[buildTool.name].rootHmr = hmrTime
            }
          }

          if (isFinished()) {
            clearTimeout(hmrTimeout)
            page.close()
            waitResolve()
          }
        } else if (
          event.text().includes('leaf hmr') &&
          perfResult[buildTool.name]?.leafHmr === undefined
        ) {
          const match = /(\d+)/.exec(event.text())
          if (!match) {
            logger.warn(`${buildTool.name} failed to match leaf HMR time from: ${event.text()}`)
            perfResult[buildTool.name].leafHmr = 'Failed'
            return
          }

          // Check if hmrLeafStart was properly set
          if (hmrLeafStart === -1) {
            logger.warn(`${buildTool.name} leaf HMR start time not set, skipping measurement`)
            perfResult[buildTool.name].leafHmr = 'Failed'
          } else {
            // Since we're now using the file modification time in the console.log,
            // we calculate HMR time as the difference between when the event was processed
            // and when the file was modified
            const currentTime = Date.now()
            const hmrTime = currentTime - hmrLeafStart
            // Sanity check for reasonable HMR time (should be less than 30 seconds)
            if (hmrTime < 0 || hmrTime > 30000) {
              logger.warn(`${buildTool.name} leaf HMR time seems invalid: ${hmrTime}ms`)
              perfResult[buildTool.name].leafHmr = 'Failed'
            } else {
              logger.success(
                color.dim(buildTool.name) + ' leaf HMR in ' + color.green(hmrTime + 'ms'),
              )
              perfResult[buildTool.name].leafHmr = hmrTime
            }
          }

          if (isFinished()) {
            clearTimeout(hmrTimeout)
            page.close()
            waitResolve()
          }
        }
      })

      const rootFilePath = path.join(__dirname, 'src', caseName, 'f0.jsx')
      const originalRootFileContent = readFileSync(rootFilePath, 'utf-8')

      // Record the timestamp when we start the file modification process
      const fileModStartTime = Date.now()

      // Use synchronous write to ensure timing is accurate
      writeFileSync(
        rootFilePath,
        originalRootFileContent +
          `
    console.log('root hmr', ${fileModStartTime});
    `,
      )

      // Set start time to the file modification time for consistent measurement
      hmrRootStart = fileModStartTime

      await new Promise((resolve) => setTimeout(resolve, 3000))

      const leafFilePath = path.join(__dirname, 'src', caseName, 'd0/d0/d0/f0.jsx')
      const originalLeafFileContent = readFileSync(leafFilePath, 'utf-8')

      // Record the timestamp when we start the file modification process
      const leafFileModStartTime = Date.now()

      // Use synchronous write to ensure timing is accurate
      writeFileSync(
        leafFilePath,
        originalLeafFileContent +
          `
      console.log('leaf hmr', ${leafFileModStartTime});
      `,
      )

      // Set start time to the file modification time for consistent measurement
      hmrLeafStart = leafFileModStartTime

      await waitPromise.catch((error) => {
        // If HMR timeout occurred, continue with the rest of the benchmark
        if (error.message === 'HMR timeout') {
          logger.warn(`Continuing benchmark for ${buildTool.name} after HMR timeout`)
        } else {
          throw error
        }
      })

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
          color.dim(buildTool.name) + ' built in ' + color.green(buildResult.totalBuild + ' ms'),
        )
        logger.success(
          color.dim(buildTool.name) +
            ' prod build: ' +
            color.green(Math.round(buildResult.prodBuild) + ' ms'),
        )
        logger.success(
          color.dim(buildTool.name) +
            ' prepare: ' +
            color.green(Math.round(buildResult.prepare) + ' ms'),
        )
        logger.success(color.dim(buildTool.name) + ' total size: ' + color.green(sizes.totalSize))
        logger.success(
          color.dim(buildTool.name) + ' gzipped size: ' + color.green(sizes.totalGzipSize),
        )

        perfResult[buildTool.name].prodBuild = Math.round(buildResult.prodBuild)
        perfResult[buildTool.name].prepare = Math.round(buildResult.prepare)
        perfResult[buildTool.name].totalBuild = buildResult.totalBuild
      } catch (buildError) {
        logger.error(color.red(`${buildTool.name} build failed:`) + ` ${buildError.message}`)
        perfResult[buildTool.name].prodBuild = 'Failed'
        perfResult[buildTool.name].prepare = 'Failed'
        perfResult[buildTool.name].totalBuild = 'Failed'
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

      // Still do coolDown to avoid affecting next tool
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
const validCounts = {}

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
      validCounts[name] = {}
    }

    for (const [key, value] of Object.entries(values)) {
      if (!averageResults[name][key]) {
        averageResults[name][key] = 0
        averageResultsNumbers[name][key] = 0
        validCounts[name][key] = 0
      }

      // Only process numeric values, skip 'Failed' strings
      if (
        typeof value === 'number' ||
        (typeof value === 'string' && !Number.isNaN(Number(value)))
      ) {
        averageResults[name][key] += Number(value)
        averageResultsNumbers[name][key] += Number(value)
        validCounts[name][key] += 1
      }
    }
  }
}

for (const [name, values] of Object.entries(averageResults)) {
  for (const [key, value] of Object.entries(values)) {
    const validCount = validCounts[name][key]
    if (value > 0 && validCount > 0) {
      // Calculate average using actual count of valid data
      const avgValue = Math.floor(value / validCount)
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
    'devColdStart',
    'serverStart',
    'onLoad',
    'rootHmr',
    'leafHmr',
    'prodBuild',
    'prepare',
  ]

  const formattedResults = {}
  const resultsEntries = Object.entries(results)

  // Helper function to safely get numeric value
  const getNumericValue = (values, metric) => {
    const value = values[metric]
    return value && typeof value === 'number' ? value : null
  }

  // Helper function to format metric result
  const formatMetricResult = (name, values, metric, minValue, customFormatter = null) => {
    if (!formattedResults[name]) {
      formattedResults[name] = {}
    }

    const numericValue = getNumericValue(values, metric)
    if (numericValue !== null && minValue !== Number.POSITIVE_INFINITY) {
      const multiplier = numericValue / minValue
      const trophy = multiplier === 1 ? color.green(' ◆') : ''

      if (customFormatter) {
        formattedResults[name][metric] = customFormatter(numericValue, multiplier, trophy, values)
      } else {
        formattedResults[name][metric] = `${numericValue}ms (${multiplier.toFixed(1)}x)${trophy}`
      }
    } else {
      formattedResults[name][metric] = values[metric] || 'Failed'
    }
  }

  // Process standard metrics
  for (const metric of metrics) {
    // Find minimum value for this metric
    let minValue = Number.POSITIVE_INFINITY
    for (const [, values] of resultsEntries) {
      const numericValue = getNumericValue(values, metric)
      if (numericValue !== null && numericValue < minValue) {
        minValue = numericValue
      }
    }

    // Skip if no valid values found
    if (minValue === Number.POSITIVE_INFINITY) {
      continue
    }

    // Format results for this metric
    for (const [name, values] of resultsEntries) {
      formatMetricResult(name, values, metric, minValue)
    }
  }

  // Process Dev cold start (special case: devColdStart = serverStart + onLoad)
  let minDevColdStart = Number.POSITIVE_INFINITY
  for (const [, values] of resultsEntries) {
    const devColdStartValue = getNumericValue(values, 'devColdStart')
    if (devColdStartValue !== null && devColdStartValue < minDevColdStart) {
      minDevColdStart = devColdStartValue
    }
  }

  if (minDevColdStart !== Number.POSITIVE_INFINITY) {
    for (const [name, values] of resultsEntries) {
      const devColdStartValue = getNumericValue(values, 'devColdStart')
      const serverStartValue = getNumericValue(values, 'serverStart')
      const onLoadValue = getNumericValue(values, 'onLoad')

      if (devColdStartValue !== null && serverStartValue !== null && onLoadValue !== null) {
        const multiplier = devColdStartValue / minDevColdStart
        const trophy = multiplier === 1 ? color.green(' ◆') : ''

        if (!formattedResults[name]) {
          formattedResults[name] = {}
        }

        formattedResults[name].devColdStart =
          `${devColdStartValue}ms (${serverStartValue} + ${onLoadValue}) ${multiplier.toFixed(1)}x${trophy}`
      } else {
        if (!formattedResults[name]) {
          formattedResults[name] = {}
        }
        formattedResults[name].devColdStart = 'Failed'
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

    if (
      Number.isNaN(totalSize) ||
      Number.isNaN(totalGzipSize) ||
      totalSize === 0 ||
      totalGzipSize === 0
    ) {
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

  // Find minimum sizes (only from valid entries with size > 0)
  let minTotalSize = Number.POSITIVE_INFINITY
  let minGzipSize = Number.POSITIVE_INFINITY
  for (const sizes of Object.values(sizeNumbers)) {
    if (
      typeof sizes.totalSize === 'number' &&
      sizes.totalSize > 0 &&
      sizes.totalSize < minTotalSize
    ) {
      minTotalSize = sizes.totalSize
    }
    if (
      typeof sizes.totalGzipSize === 'number' &&
      sizes.totalGzipSize > 0 &&
      sizes.totalGzipSize < minGzipSize
    ) {
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
        minTotalSize !== Number.POSITIVE_INFINITY && sizes.totalSize > 0
          ? sizes.totalSize / minTotalSize
          : 1
      const gzipMultiplier =
        minGzipSize !== Number.POSITIVE_INFINITY && sizes.totalGzipSize > 0
          ? sizes.totalGzipSize / minGzipSize
          : 1

      const totalTrophy = totalMultiplier === 1 ? color.green(' ◆') : ''
      const gzipTrophy = gzipMultiplier === 1 ? color.green(' ◆') : ''

      // Don't show multipliers for entries with 0 size
      if (sizes.totalSize === 0 || sizes.totalGzipSize === 0) {
        formattedSizes[name] = {
          totalSize: `${sizes.totalSize}kB`,
          totalGzipSize: `${sizes.totalGzipSize}kB`,
        }
      } else {
        formattedSizes[name] = {
          totalSize: `${sizes.totalSize}kB (${totalMultiplier.toFixed(1)}x)${totalTrophy}`,
          totalGzipSize: `${sizes.totalGzipSize}kB (${gzipMultiplier.toFixed(1)}x)${gzipTrophy}`,
        }
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
      ['Name', 'Dev cold start', 'Root HMR', 'Leaf HMR', 'Prod build', 'Prepare'],
      ...buildTools.map(({ name }) => [
        name,
        formattedResults[name]?.devColdStart || 'Failed',
        formattedResults[name]?.rootHmr || 'Failed',
        formattedResults[name]?.leafHmr || 'Failed',
        formattedResults[name]?.prodBuild || 'Failed',
        formattedResults[name]?.prepare || 'Failed',
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
