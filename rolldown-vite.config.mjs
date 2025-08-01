import path from 'node:path'
import react from '@vitejs/plugin-react-oxc'
import { defineConfig } from 'rolldown-vite'

export default defineConfig({
  root: path.resolve(__dirname, 'src', process.env.CASE ?? 'medium'),
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
