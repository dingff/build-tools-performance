import path from 'node:path'
import { defineConfig } from '@unpackjs/core'
import { pluginReact } from '@unpackjs/plugin-react'

const caseName = process.env.CASE ?? 'large'

export default defineConfig({
  entry: path.join(import.meta.dirname, 'src', caseName, 'index.jsx'),
  server: {
    port: 4000,
  },
  css: {
    transformer: 'lightningcss',
  },
  experiments: {
    css: Boolean(process.env.EXPERIMENTS_CSS),
  },
  dev: {
    prebundle: Boolean(process.env.PREBUNDLE),
  },
  typeCheck: false,
  plugins: [pluginReact()],
  performance: {
    printFileSize: false,
    cache: false,
  },
})
