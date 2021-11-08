const webpack = require('webpack')
const dotenv = require('dotenv')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  stats: 'minimal',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
})
