const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = (context) => ({
  plugins: [
    context.env === "production" &&
      purgecss({
        content: [
          "./node_modules/bootstrap/js/dist/alert.js",
          "./node_modules/bootstrap/js/dist/collapse.js",
          "./node_modules/bootstrap/js/dist/dropdown.js",
          "./node_modules/bootstrap/js/dist/modal.js",
          "./node_modules/bootstrap/js/dist/offcanvas.js",
          "./node_modules/bootstrap/js/dist/toast.js",
          "./src/**/*.astro",
        ],
        safelist: [
          /^_/, // for css modules
        ],
      }),
  ],
});
