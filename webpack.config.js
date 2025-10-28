const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { watch } = require("fs");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  /* Настройки для дев-сервера */
  devtool: "eval-source-map",
  devServer: {
    watchFiles: "./src/index.html",
  },
  /* Плагины */
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        /* Обработка CSS */
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        /* Обработка изображений */
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        /* Обработка HTML */
        test: /\.html$/i,
        loader: "html-loader",
      }
    ],


  },
};
