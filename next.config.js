/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Reject requests with bodies over 10MB at the framework level
  // before any route handler runs. Catches 500MB payload attacks.
  serverRuntimeConfig: {
    bodySizeLimit: '10mb',
  },
};

module.exports = nextConfig;
