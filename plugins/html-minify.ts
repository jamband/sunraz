import { minify } from "html-minifier-terser";
import type { PluginOption } from "vite";
import { createFilter } from "vite";

export default function htmlMinify(): PluginOption {
  return {
    name: "html-minify",
    enforce: "post",
    apply: "build",
    async generateBundle(_, _bundle) {
      for (const bundle of Object.values(_bundle)) {
        if (
          bundle.type === "asset" &&
          createFilter(["**/*.html"])(bundle.fileName) &&
          typeof bundle.source === "string"
        ) {
          bundle.source = await minify(bundle.source, {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            decodeEntities: true,
            ignoreCustomComments: [/^#/],
            minifyCSS: true,
            minifyJS: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeOptionalTags: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortAttributes: true,
            sortClassName: true,
          });
        }
      }
    },
  };
}
