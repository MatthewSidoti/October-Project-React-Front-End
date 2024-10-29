import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default port for Vite
    open: true, // Open browser on server start
  },
  build: {
    outDir: 'dist', // Output directory for build
  },
});
