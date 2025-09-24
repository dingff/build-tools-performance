import path from 'node:path'
import { defineConfig } from '@unpackjs/core'
import { pluginReact } from '@unpackjs/plugin-react'

const caseName = process.env.CASE ?? 'medium'

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
  build: {
    target: 'es2022',
  },
  bundlerConfig: {
    experiments: {
      nativeWatcher: Boolean(process.env.NATIVE_WATCHER),
    },
  },
})
