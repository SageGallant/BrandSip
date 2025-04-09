/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages specific configuration
  basePath: process.env.NODE_ENV === "production" ? "/brandsip" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/brandsip/" : "",
  // Images configuration - required for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Disable trailing slashes for better compatibility
  trailingSlash: false,
};

module.exports = nextConfig;
