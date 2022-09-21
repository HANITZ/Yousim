/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "*"],
  },
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
}

module.exports = nextConfig
