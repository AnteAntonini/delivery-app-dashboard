/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/orders",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
