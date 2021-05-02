const HtmlPlugin = require("html-webpack-plugin");

const pagesPath = "./src/pages";
const appName = "SunRaz";

module.exports = {
  entry: {
    app: "./src/entries/app.js",
  },
  output: {
    path: `${__dirname}/dist`,
  },
  plugins: [
    new HtmlPlugin({
      template: `${pagesPath}/index.html`,
      filename: "index.html",
      templateParameters: {
        title: appName,
      },
    }),
    new HtmlPlugin({
      template: `${pagesPath}/about.html`,
      filename: "about.html",
      templateParameters: {
        title: `About · ${appName}`,
      },
    }),
    new HtmlPlugin({
      template: `${pagesPath}/404.html`,
      filename: "404.html",
      templateParameters: {
        title: `Not Found · ${appName}`,
      },
    }),
  ],
};
