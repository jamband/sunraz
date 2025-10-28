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
            "import",
            "legacy-js-api",
          ],
        },
      },
    },
  },
});
