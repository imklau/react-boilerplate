const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './../public'),
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
})
