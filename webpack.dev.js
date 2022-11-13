const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: "development",
  watch: true,
  entry: {
    app: "./src/entries/app.js",
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "[name].js",
    assetModuleFilename: "[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: "src/pages/index.html",
    }),
    new HtmlPlugin({
      template: "src/pages/about/index.html",
      filename: "about/index.html",
    }),
    new HtmlPlugin({
      template: "src/pages/404.html",
      filename: "404.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
