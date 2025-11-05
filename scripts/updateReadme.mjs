import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { markdownTable } from 'markdown-table'
import { logger } from 'rslog'
import stringWidth from 'string-width'

const require = createRequire(import.meta.url)

const QuickChart = require('quickchart-js')

export function updateReadme({
  formattedResults,
  formattedSizes,
  buildTools,
  caseName,
  averageResultsNumbers,
  sizeResults,
}) {
  try {
    const hash32 = (string_) => {
      let h = 2_166_136_261 >>> 0
      for (let i = 0; i < string_.length; ) {
        const cp = string_.codePointAt(i)
        h ^= cp
        h = Math.imul(h, 16_777_619)
        i += cp > 0xff_ff ? 2 : 1
      }
      return h >>> 0
    }
    const getColorFromName = (name, opacity = 1) => {
      const GOLDEN_ANGLE = 137.507_764_050_037_85
      const hv = hash32(name)

      const h = (hv * GOLDEN_ANGLE) % 360

      const sJitter = ((hv >>> 8) & 0xff) / 255
      const s = 75 + (sJitter - 0.5) * 15 // ~55–70%

      const lJitter = ((hv >>> 16) & 0xff) / 255
      const l = 50 + (lJitter - 0.5) * 15 // ~60–75%

      return `hsla(${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%, ${opacity})`
    }
    const chartDimensions = [
      {
        name: 'devColdStart',
        title: 'Dev cold start',
        unit: 'ms',
      },
      {
        name: 'rootHmr',
        title: 'Root HMR',
        unit: 'ms',
      },
      {
        name: 'leafHmr',
        title: 'Leaf HMR',
        unit: 'ms',
      },
      {
        name: 'prodBuild',
        title: 'Prod build',
        unit: 'ms',
      },
      {
        name: 'totalSize',
        title: 'Total size',
        unit: 'kB',
      },
      {
        name: 'totalGzipSize',
        title: 'Gzipped size',
        unit: 'kB',
      },
    ]

    const chartUrls = chartDimensions.map((dimension) => {
      const labels = buildTools.map(({ name }) => name)
      const myChart = new QuickChart()
      myChart.setConfig({
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: dimension.title,
              data: labels.map(
                (name) =>
                  averageResultsNumbers[name]?.[dimension.name] ||
                  sizeResults[name]?.[dimension.name].toFixed(1),
              ),
              backgroundColor: [...labels.map((lbl) => getColorFromName(lbl, 0.7))],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: dimension.title,
          },
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  // Avoid referencing outer variables in QuickChart runtime
                  // Generate a function with unit literal embedded to prevent "dimension is not defined"
                  callback: new Function('value', 'return value + "' + dimension.unit + '"'),
                },
              },
            ],
          },
          plugins: {
            datalabels: {
              anchor: 'end', // 标签锚点位置：'end' 表示在数据条的末端（对于柱状图，通常是顶部）
              align: 'top', // 标签文本相对于锚点的对齐方式：'top' 表示在上方
              // color: '#333', // 标签文字的颜色
              // font: {
              //   size: 14, // 标签文字的字体大小
              // },
              // Same fix here: embed unit literal so runtime doesn't rely on outer scope
              formatter: new Function('value', 'return value + "' + dimension.unit + '"'),
            },
          },
        },
      })
      return myChart.getUrl()
    })
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

    const header = `\n\n## Results\n\n- Case: \`${caseName}\`\n- Date: \`${timestamp}\`\n\n`

    // Render charts above the tables in <picture> format
    const renderPicture = (url) =>
      `\n<picture>\n\t<source media="(prefers-color-scheme: dark)" srcset="${url}">\n\t<img src="${url}">\n</picture>`

    const chartsSection =
      Array.isArray(chartUrls) && chartUrls.length > 0
        ? `${chartUrls.map((url) => renderPicture(url)).join('\n')}\n\n`
        : ''

    const section = `<!-- BENCHMARK:START -->\n${header}${chartsSection}**Build performance**\n\n${buildPerfTable}\n\n**Bundle sizes**\n\n${bundleSizesTable}\n<!-- BENCHMARK:END -->\n`

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
