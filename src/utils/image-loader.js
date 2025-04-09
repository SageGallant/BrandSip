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
      basePath = "/brandsip";
    } else {
      basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    }
  } else {
    basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  }

  const normalizedSrc = src.startsWith("/") ? src.slice(1) : src;

  // Include width and quality if provided
  const params = [];
  if (width) {
    params.push(`w=${width}`);
  }
  if (quality) {
    params.push(`q=${quality || 75}`);
  }

  const queryString = params.length ? `?${params.join("&")}` : "";

  // Log to debug
  console.log(`Resolving image: ${basePath}/${normalizedSrc}${queryString}`);

  return `${basePath}/${normalizedSrc}${queryString}`;
}
