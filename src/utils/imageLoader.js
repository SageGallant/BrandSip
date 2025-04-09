/**
 * Custom image loader for Next.js Image component
 * Handles GitHub Pages deployment by adding the repo name as a base path
 * and manages case sensitivity issues for image paths
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
      window.location.hostname.includes("brandspecial.github.io") ||
      window.location.hostname.includes("sagegallant.github.io"));

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

  // Special handling for images directory to ensure correct case sensitivity
  // This is important for GitHub Pages which is case-sensitive
  let finalSrc;

  if (normalizedSrc.toLowerCase().includes("images/")) {
    // Extract the filename part (after the last /)
    const pathParts = normalizedSrc.split("/");
    const fileName = pathParts[pathParts.length - 1].toLowerCase(); // Force lowercase filenames

    // For images folder path, ensure 'images' is all lowercase
    // and ensure the filename is lowercase for case-sensitive systems
    finalSrc = `${basePath}/images/${fileName}`;
  } else {
    // For other paths, just append the normalized path to the base path
    finalSrc = `${basePath}/${normalizedSrc}`;
  }

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
