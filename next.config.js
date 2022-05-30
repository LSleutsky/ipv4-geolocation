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
  },
  webpackDevMiddleware: (config) => {
    // Enables hot reload for Docker
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000
    };

    return config;
  }
};

module.exports = nextConfig;
