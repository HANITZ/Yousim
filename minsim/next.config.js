/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    domains: ["localhost","yt3.ggpht.com", "*"],
  },
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
}

module.exports = {
  images: {
    domains: ["yt3.ggpht.com"]
  }
}