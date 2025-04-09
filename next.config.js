/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages specific configuration
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
    : "",
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
    // Make images work with static export
    loader: "custom",
    loaderFile: "./src/utils/image-loader.js",
  },
  // Disable trailing slashes for better compatibility
  trailingSlash: false,
  // Ensure experimental static export
  experimental: {
    // Helps with static exports
    appDocumentPreloading: true,
  },
  // Provide specific export configuration
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
      "/investors": { page: "/investors" },
      "/vision": { page: "/vision" },
      "/industries": { page: "/industries" },
      "/products": { page: "/products" },
      "/404": { page: "/404" },
    };
  },
};

module.exports = nextConfig;
