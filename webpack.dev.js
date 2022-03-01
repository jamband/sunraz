const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type import("webpack").Configuration */
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    watchFiles: ["src/layouts/*", "src/pages/*"],
  },
  plugins: [new MiniCssExtractPlugin()],
});
