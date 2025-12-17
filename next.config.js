/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    domains: [],
    unoptimized: false,
  },

  // Environment variables that should be available on the client
  env: {
    SITE_URL: process.env.SITE_URL || 'https://matchlabfantasy.com',
  },
}

module.exports = nextConfig
