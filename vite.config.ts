import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({
      exportAsDefault: true,
      svgrOptions: { icon: true, svgo: true, replaceAttrValues: { fill: 'currentColor' } },
    }),
    react(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8080'),
    __PROJECT__: JSON.stringify('frontend'),
  },
  server: {
    port: 3000,
    open: true,
  },
});
