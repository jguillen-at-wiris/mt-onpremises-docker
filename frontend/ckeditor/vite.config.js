import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/pluginwiris_engine': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/editor': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/hand': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
