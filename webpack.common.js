const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const appName = "SunRaz";
const pagePath = "src/pages";

module.exports = {
  entry: {
    app: "./src/entries/app.js",
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
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
      template: `${pagePath}/index.html`,
      templateParameters: {
        title: appName,
      },
    }),
    new HtmlPlugin({
      template: `${pagePath}/about/index.html`,
      filename: "about/index.html",
      templateParameters: {
        title: `About ･ ${appName}`,
      },
    }),
    new HtmlPlugin({
      template: `${pagePath}/404.html`,
      filename: "404.html",
      templateParameters: {
        title: `Not Found ･ ${appName}`,
      },
    }),
  ],
};
