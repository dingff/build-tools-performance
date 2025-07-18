import path from 'node:path'
import { defineConfig } from '@farmfe/core'

const isProduction = process.env.NODE_ENV === 'production'
const caseName = process.env.CASE ?? 'medium'

export default defineConfig({
  compilation: {
    sourcemap: !isProduction,
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
