// Helper function to get the base path used for links, assets, etc.
export function getBasePath() {
  // Check if we're in the browser and use window.location to determine if we're on GitHub Pages
  if (typeof window !== "undefined") {
    // For GitHub Pages deployment
    if (window.location.hostname.includes("github.io")) {
      return "/brandsip";
    }
  }
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

// Helper function to prefix paths with the base path
export function withBasePath(path) {
  const basePath = getBasePath();
  // Don't add the base path for absolute URLs
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Ensure we don't double-prefix
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

// For client-side navigation with Next.js Link components
export function getLinkHref(href) {
  // In Next.js static exports with basePath, Link components
  // are automatically prefixed, so we don't need to modify these
  return href;
}
