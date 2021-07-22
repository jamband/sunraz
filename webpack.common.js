const HtmlPlugin = require("html-webpack-plugin");

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
  plugins: [
    html({ filename: "index" }),
    html({ filename: "about", title: "About" }),
    html({ filename: "404", title: "Not Found" }),
  ],
};
