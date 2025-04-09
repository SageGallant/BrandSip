export default function imageLoader({ src, width, quality }) {
  // For remote images (like from unsplash)
  if (src.startsWith("https://") || src.startsWith("http://")) {
    return src;
  }

  // For local images, prepend the asset prefix for GitHub Pages
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
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

  return `${basePath}/${normalizedSrc}${queryString}`;
}
