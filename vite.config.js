import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    watch: {
      // Ignore large or OS-locked asset files to avoid EBUSY watcher errors on Windows
      ignored: ['**/src/assets/**'],
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
});
