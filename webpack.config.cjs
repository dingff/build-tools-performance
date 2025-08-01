const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { EsbuildPlugin } = require('esbuild-loader')

const isProd = process.env.NODE_ENV === 'production'
const caseName = process.env.CASE ?? 'medium'
const caseDir = path.join(__dirname, './src', caseName)

// webpack.config.js
module.exports = {
  mode: isProd ? 'production' : 'development',
  target: ['web', 'es2022'],
  devtool: isProd ? false : 'cheap-module-source-map',
  entry: path.join(caseDir, 'index.jsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.ts', '.tsx'],
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
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(caseDir, 'index-rspack.html'),
    }),
    isProd ? null : new ReactRefreshWebpackPlugin(),
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
    lazyCompilation: !isProd
      ? {
          entries: false,
          imports: true,
        }
      : false,
  },
}
