/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.jsdelivr.net", // For the company logos
      "www.mtoag.com",
    ],
  },
};

module.exports = nextConfig;
