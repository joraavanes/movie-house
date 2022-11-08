/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  staticPageGenerationTimeout: 120,
  swcMinify: true,
  env: {
    API_BASE_URL: 'https://moviesapi.ir'
  },
  images: {
    domains:[
      'moviesapi.ir',
    ]
  }
}

module.exports = nextConfig
