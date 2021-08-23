const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')
require('dotenv').config()

module.exports = {
  entry: path.join(__dirname, './src/index.tsx'),
  output: {
    path: path.join(__dirname, process.env.OUTPUT_DIR),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].js',
    publicPath: process.env.PUBLIC_PATH,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img/',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/',
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'BACKEND_HOST',
    ]),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
