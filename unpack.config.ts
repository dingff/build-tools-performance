import { defineConfig } from '@unpackjs/cli';
import path from 'node:path';
const caseName = process.env.CASE ?? 'medium';

export default defineConfig({
  entry: path.join(import.meta.dirname, 'src', caseName, 'index.jsx'),
  server: {
    port: 4000,
  },
  css: {
    transformer: 'lightningcss',
  },
  // experiments: {
  //   css: true,
  // },
  dev: {
    lazyCompilation: Boolean(process.env.LAZY),
  },
  typeCheck: false,
});
