/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const path = require('path');
const withPWA = require('next-pwa');
const { i18n } = require('./next-i18next.config');
const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    dirs: ['.']
  },
  basePath: '',
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  poweredByHeader: false,
  trailingSlash: true,
  sassOptions: {
    prependData: `@import "src/assets/scss/variables.scss";`,
    includePaths: [path.join(__dirname, 'src')]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),
  env: {
    NEXT_SITE_URL: process.env.NEXT_SITE_URL || 'https://localhost',
    NEXT_API_URL: process.env.NEXT_API_URL || 'http//localhost',
    VK_AUTH_URL: process.env.VK_AUTH_URL || ''
  },
  devIndicators: {
    autoPrerender: false
  },
  images: {
    domains: ['*']
  },
  pwa: {
    disable: prod ? false : true,
    dest: 'public',
    register: true,
    skipWaiting: true
  },
  i18n
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));
