const path = require('path')

const webpack = require('webpack')
const dotenv = require('dotenv')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  stats: 'minimal',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Boilerplate',
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './../src/assets'),
      '@components': path.resolve(__dirname, './../src/components'),
      '@views': path.resolve(__dirname, './../src/views'),
      '@theme': path.resolve(__dirname, './../src/theme'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
}
