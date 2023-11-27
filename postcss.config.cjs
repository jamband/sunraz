const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = (context) => ({
  plugins: [
    context.env === "production" &&
      purgecss({
        content: [
          "./node_modules/bootstrap/js/dist/collapse.js",
          "./src/**/*.html",
        ],
      }),
  ],
});
