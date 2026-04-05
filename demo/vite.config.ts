import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const demoRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => ({
  root: demoRoot,
  base: command === 'build' ? '/LuminaWall/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(demoRoot, '..'),
    },
  },
}));
