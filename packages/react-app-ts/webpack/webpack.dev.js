const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  output: {
    publicPath: "/",
  },
  stats: "minimal",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Boilerplate",
      template: "./src/index.html",
    }),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./../src/assets"),
      "@components": path.resolve(__dirname, "./../src/components"),
      "@views": path.resolve(__dirname, "./../src/views"),
      "@theme": path.resolve(__dirname, "./../src/theme"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
}
