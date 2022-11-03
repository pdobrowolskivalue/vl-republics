/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  async redirects() {
    return [
      {
        source: '/republic',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
