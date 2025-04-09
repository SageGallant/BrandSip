"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

// Custom component that automatically adds the base path for GitHub Pages
const ImageWithBasePath = (props: ImageProps & { src: string }) => {
  // Initial detection on render (will be false on server, updated on client)
  const [isGitHubPages, setIsGitHubPages] = useState(false);
  // Track loading state for better UX
  const [loadingStatus, setLoadingStatus] = useState<
    "loading" | "success" | "error"
  >("loading");

  // Get proper image source - this ensures we have the right path even during server rendering
  const getProperImageSrc = (src: string, isGitHub: boolean) => {
    // Handle absolute URLs (remote images)
    if (src.startsWith("http") || src.startsWith("data:")) {
      return src;
    }

    // Normalize path to avoid case sensitivity issues
    if (isGitHub && src.toLowerCase().includes("images/")) {
      const basePath = "/BrandSip";
      // Extract the filename from the path (everything after 'images/')
      const pathParts = src.split("images/");
      if (pathParts.length > 1) {
        const filename = pathParts[1];
        // Construct path with normalized 'images' folder name (always lowercase)
        return `${basePath}/images/${filename}`;
      }
    }

    // For local images on GitHub Pages
    if (isGitHub && src.startsWith("/") && !src.startsWith("/BrandSip")) {
      return `/BrandSip${src}`;
    }

    // For local images during development or if already has prefix
    return src;
  };

  // Initial image source
  const [imageSrc, setImageSrc] = useState(props.src);

  // Effect to update paths once we're on the client
  useEffect(() => {
    // Check if we're running on GitHub Pages
    const isGitHub =
      typeof window !== "undefined" &&
      window.location.hostname.includes("github.io");
    setIsGitHubPages(isGitHub);

    // Update image source with correct path
    const properSrc = getProperImageSrc(props.src, isGitHub);
    if (properSrc !== imageSrc) {
      setImageSrc(properSrc);
      // Reset loading status when source changes
      setLoadingStatus("loading");
    }

    // Log for debugging
    if (isGitHub) {
      console.log(
        "Running on GitHub Pages - Image path adjusted:",
        props.src,
        "→",
        properSrc
      );
    }
  }, [props.src]);

  // Create a fallback image URL for error handling
  const handleImageError = () => {
    setLoadingStatus("error");
    console.log("Image failed to load:", imageSrc);

    // Try different paths if the image fails to load
    if (imageSrc !== props.src) {
      // Try original path
      setImageSrc(props.src);
    } else if (isGitHubPages && !imageSrc.includes("/BrandSip")) {
      // Try with /BrandSip prefix if it's not already there
      setImageSrc(`/BrandSip${imageSrc}`);
    } else if (isGitHubPages && imageSrc.includes("/BrandSip")) {
      // Try alternative path format for GitHub Pages
      // Adjust the path to use lowercase 'images' directory
      if (imageSrc.toLowerCase().includes("images/")) {
        const pathParts = imageSrc.toLowerCase().split("images/");
        if (pathParts.length > 1) {
          const filename = pathParts[1];
          setImageSrc(`/BrandSip/images/${filename}`);
        }
      } else {
        // Try without BrandSip prefix if that fails
        setImageSrc(imageSrc.replace("/BrandSip", ""));
      }
    }
  };

  const handleImageLoad = () => {
    setLoadingStatus("success");
  };

  return (
    <>
      <Image
        {...props}
        src={imageSrc}
        onError={handleImageError}
        onLoad={handleImageLoad}
        alt={props.alt || "Image"}
      />
      {loadingStatus === "error" && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
          Unable to load image
        </div>
      )}
    </>
  );
};

export default ImageWithBasePath;
