// @ts-check
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  root: path.resolve(__dirname, 'src', process.env.CASE ?? 'medium'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    target: ['chrome87', 'edge88', 'firefox78', 'safari14'],
    reportCompressedSize: false,
  },
  plugins: [react()],
  optimizeDeps: {
    // pre-bundle "@iconify-icons/material-symbols/*" is quite slow and should be excluded
    exclude: ['@iconify-icons/material-symbols'],
  },
})
