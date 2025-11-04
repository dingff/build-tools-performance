import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { markdownTable } from 'markdown-table'
import { logger } from 'rslog'
import stringWidth from 'string-width'

export function updateReadme({ formattedResults, formattedSizes, buildTools, caseName }) {
  try {
    const readmePath = path.resolve(import.meta.dirname, '..', 'README.md')

    const sanitizeBreakdown = (text) => {
      if (typeof text !== 'string') return text
      // Remove breakdown like (9638 + 3283)
      let s = text.replace(/\s*\(\s*\d+\s*\+\s*\d+\s*\)\s*/g, ' ')
      // Wrap multiplier like 6.6x with parentheses if not already wrapped
      s = s.replace(/(\d+(?:\.\d+)?)x/g, (m, _num, offset, str) => {
        const before = str[offset - 1]
        const after = str[offset + m.length]
        if (before === '(' && after === ')') return m
        return `(${m})`
      })
      // Normalize spaces
      return s.replace(/\s{2,}/g, ' ').trim()
    }

    const buildPerfTable = markdownTable(
      [
        ['Name', 'Dev cold start', 'Root HMR', 'Leaf HMR', 'Prod build'],
        ...buildTools.map(({ name }) => [
          name,
          sanitizeBreakdown(formattedResults[name]?.devColdStart || 'Failed'),
          formattedResults[name]?.rootHmr || 'Failed',
          formattedResults[name]?.leafHmr || 'Failed',
          sanitizeBreakdown(formattedResults[name]?.prodBuild || 'Failed'),
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
    const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`

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
  } catch (e) {
    logger.warn('Failed to update README: ' + e.message)
  }
}
