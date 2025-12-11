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
  dxScores,
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

    // 1. Add DX Score to chart dimensions
    const chartDimensions = [
      {
        name: 'dxScore',
        title: 'DX Score (Higher is better)',
      },
      {
        name: 'startup',
        title: 'Startup',
        unit: 'ms',
      },
      {
        name: 'pageReload',
        title: 'Page Reload',
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
        title: 'Prod Build',
        unit: 'ms',
      },
      {
        name: 'outputSize',
        title: 'Output size',
        unit: 'kB',
      },
      {
        name: 'gzippedSize',
        title: 'Gzipped size',
        unit: 'kB',
      },
    ]

    const chartUrls = chartDimensions.map((dimension) => {
      const labels = buildTools.map(({ name }) => name)
      const myChart = new QuickChart()
      myChart.setFormat('svg')
      myChart.setBackgroundColor('transparent')

      // 2. Update logic to handle dxScore data extraction
      const dataArr = labels.map((name) => {
        if (dimension.name === 'dxScore') {
          return dxScores?.[name] || 0
        }

        const perfVal = averageResultsNumbers[name]?.[dimension.name]
        const sizeVal = sizeResults[name]?.[dimension.name]

        if (typeof perfVal === 'number' && Number.isFinite(perfVal)) return perfVal
        if (typeof sizeVal === 'number' && Number.isFinite(sizeVal))
          return Number(sizeVal.toFixed(1))
        return 0
      })

      myChart.setConfig({
        type: 'horizontalBar',
        data: {
          labels,
          datasets: [
            {
              label: dimension.title,
              data: dataArr,
              backgroundColor: [...labels.map((lbl) => getColorFromName(lbl, 0.7))],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: dimension.title + (dimension.unit ? ' (' + dimension.unit + ')' : ''),
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false,
                  min: 0,
                  // For score, max is 100. For others, auto-scale.
                  suggestedMax: dimension.name === 'dxScore' ? 100 : Math.max(...dataArr) * 1.15,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          plugins: {
            datalabels: {
              anchor: 'end',
              align: 'right',
            },
          },
        },
      })
      return myChart.getUrl()
    })
    const readmePath = path.resolve(import.meta.dirname, '..', 'README.md')

    const sanitizeBreakdown = (text) => {
      if (typeof text !== 'string') return text
      let s = text.replace(/\s*\(\s*\d+\s*\+\s*\d+\s*\)\s*/g, ' ')
      s = s.replace(/(\d+(?:\.\d+)?)x/g, (m, _num, offset, str) => {
        const before = str[offset - 1]
        const after = str[offset + m.length]
        if (before === '(' && after === ')') return m
        return `(${m})`
      })
      return s.replace(/\s{2,}/g, ' ').trim()
    }

    const buildPerfTable = markdownTable(
      [
        ['Name', 'DX Score', 'Startup', 'Page Reload', 'Root HMR', 'Leaf HMR', 'Prod Build'],
        ...buildTools.map(({ name }) => [
          name,
          dxScores && dxScores[name] !== undefined ? String(dxScores[name]) : '-',
          sanitizeBreakdown(formattedResults[name]?.startup || 'Failed'),
          formattedResults[name]?.pageReload || 'Failed',
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
        ['Name', 'Output size', 'Gzipped size'],
        ...buildTools.map(({ name }) => [
          name,
          formattedSizes[name]?.outputSize || 'Failed',
          formattedSizes[name]?.gzippedSize || 'Failed',
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

    const renderPicture = (url) => `\n<picture>\n\t<img src="${url}">\n</picture>`

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
