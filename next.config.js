/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true
  },
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
  },
  webpackDevMiddleware: (config) => {
    // Enables hot reload for Docker
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    };

    return config;
  }
};

module.exports = nextConfig;
