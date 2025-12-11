import path from 'node:path'
import { defineConfig } from '@farmfe/core'

const isProd = process.env.NODE_ENV === 'production'
const caseName = process.env.CASE

export default defineConfig({
  compilation: {
    sourcemap: !isProd,
    presetEnv: false,
    input: {
      index: path.resolve(__dirname, 'src', caseName, 'index.html'),
    },
    lazyCompilation: true,
    persistentCache: false,
    output: {
      // Farm does not support browser-es2022 yet
      targetEnv: 'browser-es2017',
    },
  },
  plugins: ['@farmfe/plugin-react'],
})
