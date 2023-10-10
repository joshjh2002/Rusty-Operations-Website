/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/news/server-event-sept-6",
        destination: "/news/events/jefferson-asylum-event-23",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
