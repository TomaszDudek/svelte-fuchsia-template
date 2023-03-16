import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/svelte-fuchsia-template/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/styles/variables.scss" as *;',
      },
    },
  },
});
