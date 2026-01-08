import path from 'node:path'
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

const caseName = process.env.CASE ?? 'large'

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: path.join(import.meta.dirname, 'src', caseName, 'index.jsx'),
    },
  },
  server: {
    port: 3333,
  },
  performance: {
    printFileSize: false,
  },
})
