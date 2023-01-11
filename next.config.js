/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com', 'www.ers.ga.gov'],
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
