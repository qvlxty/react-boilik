import { EnvironmentPlugin, Configuration } from 'webpack'
import merge from 'webpack-merge'

import * as path from 'path'
import { realpathSync } from 'fs'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

import loadersConfig from './webpack.loaders'
import { envVars } from './envs'

const appDirectory = realpathSync(process.cwd())

const config: Configuration = merge(loadersConfig, {
  entry: path.join(appDirectory, './src/index.tsx'),
  output: {
    path: path.join(appDirectory, envVars.OUTPUT_DIR),
    publicPath: envVars.PUBLIC_PATH,
    filename: 'js/[name].[fullhash].js',
    chunkFilename: 'js/[id].[fullhash].js',
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'], },
  plugins: [
    new EnvironmentPlugin(Object.keys(envVars)),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
})


export default config