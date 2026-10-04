import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio-websiteee/', // GitHub Pages serves under /<repo-name>/
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
