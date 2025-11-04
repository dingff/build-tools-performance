import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { markdownTable } from 'markdown-table'
import { logger } from 'rslog'
import stringWidth from 'string-width'

export function updateReadme({ formattedResults, formattedSizes, buildTools, caseName }) {
  try {
    const readmePath = path.resolve(import.meta.dirname, '..', 'README.md')

    const buildPerfTable = markdownTable(
      [
        ['Name', 'Dev cold start', 'Root HMR', 'Leaf HMR', 'Prod build'],
        ...buildTools.map(({ name }) => [
          name,
          formattedResults[name]?.devColdStart || 'Failed',
          formattedResults[name]?.rootHmr || 'Failed',
          formattedResults[name]?.leafHmr || 'Failed',
          formattedResults[name]?.prodBuild || 'Failed',
        ]),
      ],
      {
        stringLength: stringWidth,
      },
    )

    const bundleSizesTable = markdownTable(
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
    )

    const now = new Date()
    const pad = (n) => String(n).padStart(2, '0')
    const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(
      now.getHours(),
    )}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`

    const header = `\n\n## Benchmark Results\n\n- Case: \`${caseName}\`\n- Date: \`${timestamp}\`\n\n`

    const section = `<!-- BENCHMARK:START -->\n${header}**Build performance**\n\n${buildPerfTable}\n\n**Bundle sizes**\n\n${bundleSizesTable}\n<!-- BENCHMARK:END -->\n`

    let readme = ''
    try {
      readme = readFileSync(readmePath, 'utf-8')
    } catch {
      readme =
        '# Build Tools Performance\n\nBenchmark comparing JavaScript bundlers and build tools.\n\n'
    }

    const startMarker = '<!-- BENCHMARK:START -->'
    const endMarker = '<!-- BENCHMARK:END -->'
    const startIndex = readme.indexOf(startMarker)
    const endIndex = readme.indexOf(endMarker)

    let nextReadme
    if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
      nextReadme = readme.slice(0, startIndex) + section + readme.slice(endIndex + endMarker.length)
    } else {
      nextReadme = readme.trimEnd() + '\n' + section
    }

    writeFileSync(readmePath, nextReadme)
    logger.success('README updated with latest benchmark results')
    // Auto commit README changes
    try {
      execSync(`git add ${readmePath}`)
      const safeMsg =
        `chore(benchmark): update README results - ${caseName} - ${timestamp}`.replace(/"/g, '\\"')
      execSync(`git commit -m "${safeMsg}"`)
      logger.success('Git commit created for README update')
    } catch (commitErr) {
      logger.warn('Skipping git commit: ' + commitErr.message)
    }
  } catch (e) {
    logger.warn('Failed to update README: ' + e.message)
  }
}
