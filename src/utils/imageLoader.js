/**
 * Custom image loader for Next.js Image component
 * Handles GitHub Pages deployment by adding the repo name as a base path
 */
const imageLoader = ({ src, width, quality }) => {
  // Handle remote images (already have full URLs)
  if (src.startsWith("http") || src.startsWith("data:")) {
    return src;
  }

  // Check if we're on GitHub Pages by looking at the hostname
  const isGitHubPages =
    typeof window !== "undefined" &&
    (window.location.hostname.includes("github.io") ||
      window.location.hostname.includes("brandspecial.github.io"));

  // Determine the base path for GitHub Pages - ensure correct case
  const basePath = isGitHubPages ? "/BrandSip" : "";

  // Normalize the source path to avoid double slashes
  const normalizedSrc = src.startsWith("/") ? src.slice(1) : src;

  // Avoid double prefixing if the path already contains the base path
  if (
    isGitHubPages &&
    src.includes("/BrandSip") &&
    basePath.includes("/BrandSip")
  ) {
    return src;
  }

  // Handle case sensitivity issues (convert to lowercase for comparison only)
  if (isGitHubPages && normalizedSrc.toLowerCase().startsWith("images/")) {
    // Ensure the 'images' folder is always lowercase in the path
    const finalSrc = `${basePath}/images/${normalizedSrc.substring(7)}`;

    // Add sizing parameters if provided
    const params = [];
    if (width) {
      params.push(`w=${width}`);
    }
    if (quality) {
      params.push(`q=${quality || 75}`);
    }

    // Construct the query string if there are parameters
    const queryString = params.length ? `?${params.join("&")}` : "";

    return `${finalSrc}${queryString}`;
  }

  // Construct the final URL with the base path
  const finalSrc = `${basePath}/${normalizedSrc}`;

  // Add sizing parameters if provided
  const params = [];
  if (width) {
    params.push(`w=${width}`);
  }
  if (quality) {
    params.push(`q=${quality || 75}`);
  }

  // Construct the query string if there are parameters
  const queryString = params.length ? `?${params.join("&")}` : "";

  // Log for debugging in development
  if (process.env.NODE_ENV !== "production") {
    console.log(`Image loader: ${finalSrc}${queryString}`);
  }

  return `${finalSrc}${queryString}`;
};

export default imageLoader;
