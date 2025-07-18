// @ts-check
import path from 'node:path'
import { defineConfig } from '@rspack/cli'
import { rspack } from '@rspack/core'
import ReactRefreshPlugin from '@rspack/plugin-react-refresh'

const isProd = process.env.NODE_ENV === 'production'
const caseName = process.env.CASE ?? 'medium'
const caseDir = path.join(import.meta.dirname, './src', caseName)

export default defineConfig({
  context: import.meta.dirname,
  devtool: isProd ? false : 'cheap-module-source-map',
  target: ['web', 'es2022'],
  entry: {
    main: path.join(caseDir, 'index.jsx'),
  },
  resolve: {
    extensions: ['...', '.tsx', '.ts', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'builtin:swc-loader',
          /** @type {import('@rspack/core').SwcLoaderOptions} */
          options: {
            env: {
              targets: ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'],
            },
            jsc: {
              target: 'es2022',
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                  development: !isProd,
                  refresh: !isProd,
                },
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: path.join(caseDir, 'index-rspack.html'),
    }),
    !isProd && new ReactRefreshPlugin(),
  ],
  experiments: {
    css: true,
    // lazyCompilation should only be enabled in development mode
    lazyCompilation: !isProd
      ? {
          entries: false,
          imports: true,
        }
      : false,
  },
})
