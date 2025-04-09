export default function imageLoader({ src, width, quality }) {
  // For remote images (like from unsplash)
  if (src.startsWith("https://") || src.startsWith("http://")) {
    return src;
  }

  // For local images, prepend the asset prefix for GitHub Pages
  let basePath = "";

  // Check if we're in the browser
  if (typeof window !== "undefined") {
    // For GitHub Pages deployment
    if (window.location.hostname.includes("github.io")) {
      basePath = "/BrandSip"; // Make sure this matches the exact case of your repo name
      console.log(`GitHub Pages detected. Using basePath: ${basePath}`);
    } else {
      basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
      console.log(`Local environment. Using basePath: ${basePath}`);
    }
  } else {
    basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    console.log(`Server-side. Using basePath: ${basePath}`);
  }

  // Handle the source path correctly
  let normalizedSrc = src;

  // Remove any existing base path to prevent duplication
  if (normalizedSrc.startsWith(basePath)) {
    normalizedSrc = normalizedSrc.slice(basePath.length);
  }

  // Ensure the path starts with a slash
  if (!normalizedSrc.startsWith("/")) {
    normalizedSrc = "/" + normalizedSrc;
  }

  // Include width and quality if provided
  const params = [];
  if (width) {
    params.push(`w=${width}`);
  }
  if (quality) {
    params.push(`q=${quality || 75}`);
  }

  const queryString = params.length ? `?${params.join("&")}` : "";

  const finalPath = `${basePath}${normalizedSrc}${queryString}`;

  // Log to debug
  console.log(`Image request: Original src=${src}, Resolved path=${finalPath}`);

  return finalPath;
}
