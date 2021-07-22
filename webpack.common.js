const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const html = ({ filename, title }) => {
  const appName = "SunRaz";

  return new HtmlPlugin({
    template: `./src/pages/${filename}.html`,
    filename: `${filename}.html`,
    templateParameters: {
      title: title ? `${title} ･ ${appName}` : appName,
    },
  });
};

module.exports = {
  entry: {
    app: "./src/entries/app.js",
  },
  output: {
    path: `${__dirname}/dist`,
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
    html({ filename: "index" }),
    html({ filename: "about", title: "About" }),
    html({ filename: "404", title: "Not Found" }),
  ],
};
