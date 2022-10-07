/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    domains: ["localhost", "*" ],
    deviceSizes: [360, 768, 1440],
    imageSizes: [36, 64, 128],
  },
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
}

module.exports = {
  images: {
    domains: ["yt3.ggpht.com","i.ytimg.com"]
  }
}