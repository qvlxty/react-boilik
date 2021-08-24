const webpack = require('webpack')
const { merge } = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.config')
const { GenerateSW } = require('workbox-webpack-plugin')

require('dotenv').config()

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({})],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin(),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    })
  ],
})
