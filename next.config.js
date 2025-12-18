/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // turbopackFileSystemCacheForBuild: true,
  },
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
