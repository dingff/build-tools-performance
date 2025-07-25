// @ts-check
import path from 'node:path'
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

const caseName = process.env.CASE ?? 'medium'

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: path.join(import.meta.dirname, 'src', caseName, 'index.jsx'),
    },
  },
  dev: {
    lazyCompilation: true,
  },
  server: {
    port: 3333,
  },
  performance: {
    printFileSize: false,
  },
  output: {
    overrideBrowserslist: ['Chrome >= 93'],
  },
})
