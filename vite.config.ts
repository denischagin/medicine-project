import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@app': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/components'),
      '@widgets': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/components'),
      '@entities': path.resolve(__dirname, './src/components'),
      '@shared': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()]
})