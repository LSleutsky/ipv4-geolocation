/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Fixes console error for @maxmind/geoip2-node for `fs` and `net` module not found
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false
      };
    }

    return config;
  }
};

module.exports = nextConfig;
