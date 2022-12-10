import { resolve } from "node:path";
import { defineConfig } from "vite";
import htmlMinify from "./plugins/html-minify";

const root = resolve(__dirname, "src");

export default defineConfig({
  root,
  publicDir: resolve(root, "public"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "": resolve(root, "index.html"),
        about: resolve(root, "about/index.html"),
      },
      output: {
        chunkFileNames: `assets/[hash].js`,
        assetFileNames: `assets/[hash][extname]`,
      },
    },
  },
  plugins: [htmlMinify()],
});
