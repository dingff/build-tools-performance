/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  distDir: 'dist',
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
