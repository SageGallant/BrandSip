"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

// Custom component that automatically adds the base path for GitHub Pages
const ImageWithBasePath = (props: ImageProps & { src: string }) => {
  const [basePath, setBasePath] = useState("");

  useEffect(() => {
    // Check if we're running on GitHub Pages
    const isGitHubPages = window.location.hostname.includes("github.io");

    // If on GitHub Pages, use the repository name as the base path
    // Assuming the repository name is 'BrandSip'
    if (isGitHubPages) {
      setBasePath("/BrandSip");
    }
  }, []);

  // Adjust the src to include the base path
  const adjustedSrc = props.src.startsWith("/")
    ? `${basePath}${props.src}`
    : props.src;

  return <Image {...props} src={adjustedSrc} />;
};

export default ImageWithBasePath;
