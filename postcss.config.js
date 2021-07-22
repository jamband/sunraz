const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = (context) => ({
  plugins: [
    require("autoprefixer"),
    context.env === "production" &&
      purgecss({
        content: [
          // "./node_modules/bootstrap/js/dist/alert.js",
          // "./node_modules/bootstrap/js/dist/button.js",
          // "./node_modules/bootstrap/js/dist/carousel.js",
          "./node_modules/bootstrap/js/dist/collapse.js",
          // "./node_modules/bootstrap/js/dist/dropdown.js",
          // "./node_modules/bootstrap/js/dist/modal.js",
          // "./node_modules/bootstrap/js/dist/offcanvas.js",
          // "./node_modules/bootstrap/js/dist/popover.js",
          // "./node_modules/bootstrap/js/dist/scrollspy.js",
          // "./node_modules/bootstrap/js/dist/tab.js",
          // "./node_modules/bootstrap/js/dist/toast.js",
          // "./node_modules/bootstrap/js/dist/tooltip.js",
          "./src/layouts/*",
          "./src/pages/*",
        ],
      }),
  ],
});
