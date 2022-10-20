/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
