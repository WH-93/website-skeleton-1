/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Reject requests with bodies over 10MB at the framework level
  // before any route handler runs. Catches 500MB payload attacks.
  serverRuntimeConfig: {
    bodySizeLimit: '10mb',
  },
  async headers() {
    return [
      {
        source: '/:all*(.svg|.jpg|.jpeg|.png|.webp|.avif|.woff|.woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
