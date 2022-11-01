/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:[
      'moviesapi.ir',
    ]
  }
}

module.exports = nextConfig
