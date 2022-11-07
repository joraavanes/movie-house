/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  staticPageGenerationTimeout: 120,
  swcMinify: true,
  images: {
    domains:[
      'moviesapi.ir',
    ]
  }
}

module.exports = nextConfig
