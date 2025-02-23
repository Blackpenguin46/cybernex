/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-domain.com'], // Add any image domains you need
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig

