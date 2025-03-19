/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "production",
  // Remove swcMinify as it's unrecognized in Next.js 15
  // Ensure consistent rendering between server and client
  experimental: {
    // serverActions should be an object, not a boolean
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
