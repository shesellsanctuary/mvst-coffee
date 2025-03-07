/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "epacflexibles.com",
      },
    ],
  },
};

module.exports = nextConfig;
