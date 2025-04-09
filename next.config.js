/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === "production";
const repoName = "BrandSip"; // GitHub repository name

const nextConfig = {
  output: "export",
  // GitHub Pages specific configuration
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  // Enable trailing slash for GitHub Pages compatibility
  trailingSlash: true,
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
    // For static export, we need to use static loader
    loader: "imgix",
    path: "",
  },
  // Remove experimental features that might be causing issues
  experimental: {},
  // Make sure CSS is properly loaded by ensuring the correct paths
  // Add a custom webpack configuration to fix CSS loading issues
  webpack: (config, { dev, isServer }) => {
    // Only modify in production (GitHub Pages deployment)
    if (!dev && !isServer) {
      // Ensure CSS chunk names use a stable naming pattern
      const miniCssExtractPlugin = config.plugins.find(
        (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
      );

      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.chunkFilename =
          "static/css/[contenthash].css";
        miniCssExtractPlugin.options.filename = "static/css/[contenthash].css";
      }
    }

    return config;
  },
};

module.exports = nextConfig;
