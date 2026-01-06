import { defineConfig } from "astro/config";

export default defineConfig({
  trailingSlash: "always",
  devToolbar: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            "color-functions",
            "global-builtin",
            "if-function",
            "import",
            "legacy-js-api",
          ],
        },
      },
    },
  },
});
