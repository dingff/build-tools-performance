import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  root: path.resolve(__dirname, 'src', process.env.CASE ?? 'large'),
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    target: 'es2022',
    reportCompressedSize: false,
  },
  optimizeDeps: {
    // pre-bundle "@iconify-icons/material-symbols/*" is quite slow and should be excluded
    exclude: ['@iconify-icons/material-symbols'],
  },
  experimental: {
    enableNativePlugin: true,
  },
})
