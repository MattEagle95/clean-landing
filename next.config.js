const nextTranslate = require('next-translate')
const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPlausibleProxy({ customDomain: 'http://analytics.amalotia.com' })(
    nextTranslate(nextConfig)
);