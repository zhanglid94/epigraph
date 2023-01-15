const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['epigraph.io'],
  },
};

module.exports = withPlugins([], nextConfig);
