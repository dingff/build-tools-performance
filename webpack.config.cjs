const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { EsbuildPlugin } = require('esbuild-loader')

const isProd = process.env.NODE_ENV === 'production'
const caseName = process.env.CASE ?? 'large'
const caseDir = path.join(__dirname, './src', caseName)

// webpack.config.js
module.exports = {
  mode: isProd ? 'production' : 'development',
  target: ['web', 'es2022'],
  devtool: isProd ? false : 'cheap-module-source-map',
  entry: path.join(caseDir, 'index.jsx'),
  resolve: {
    extensions: ['...', '.tsx', '.ts', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        use: {
          loader: 'swc-loader',
          options: {
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
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        type: 'asset',
      },
    ],
  },
  devServer: {
    port: 8082,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(caseDir, 'index-rspack.html'),
    }),
    !isProd && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  optimization: {
    minimize: isProd,
    minimizer: [
      new EsbuildPlugin({
        target: 'es2022',
        css: true, // Apply minification to CSS assets
      }),
    ],
  },
  experiments: {
    css: true,
    lazyCompilation: !isProd
      ? {
          entries: false,
          imports: true,
        }
      : false,
  },
}
