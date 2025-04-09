// Helper function to get the base path used for links, assets, etc.
export function getBasePath() {
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
