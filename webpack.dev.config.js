const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')
require('dotenv').config()

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = merge(baseConfig, {
  mode: 'development',
  plugins: [new ReactRefreshWebpackPlugin()],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: process.env.DEV_SERVER_HOST,
    port: +process.env.DEV_SERVER_PORT,
    historyApiFallback: true,
    proxy: {
      // Настройка прокси
      //   "/api": {
      //     target: process.env.BACKEND_HOST,
      //     secure: false,
      //     changeOrigin: true
      //   }
    },
  },
})
