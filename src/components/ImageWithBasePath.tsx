"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

// Custom props that extend ImageProps but with a required src property
interface ImageWithBasePathProps extends Omit<ImageProps, "src"> {
  src: string;
  onError?: (error: any) => void;
}

// Custom component that automatically adds the base path for GitHub Pages
const ImageWithBasePath = (props: ImageWithBasePathProps) => {
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

    // For GitHub Pages deployment
    if (isGitHub) {
      const basePath = "/BrandSip";

      // If the path already has the repo name, don't add it again
      if (src.startsWith(basePath)) {
        return src;
      }

      // Ensure path has a leading slash
      const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

      // Simply add the basePath for GitHub Pages
      return `${basePath}${normalizedSrc}`;
    }

    // For local development
    return src;
  };

  // For fallback attempts with better error handling
  const generateFallbackSrc = (
    originalSrc: string,
    isGitHub: boolean,
    attempt: number
  ) => {
    // Only try fallbacks for local image paths (not remote URLs)
    if (originalSrc.startsWith("http") || originalSrc.startsWith("data:")) {
      return null; // No fallback for remote URLs
    }

    const basePath = "/BrandSip";

    // Create up to 3 different fallback options
    switch (attempt) {
      case 1:
        // Always try with repository name and direct path to /images/
        if (isGitHub) {
          // Extract the filename
          const filename = originalSrc.split("/").pop();
          if (filename) {
            return `${basePath}/images/${filename}`;
          }
        }
        break;
      case 2:
        // Try with repository name but keeping the original path structure
        if (isGitHub) {
          // Make sure we're not duplicating the basePath
          if (originalSrc.startsWith(basePath)) {
            return originalSrc;
          } else {
            const normalizedSrc = originalSrc.startsWith("/")
              ? originalSrc
              : `/${originalSrc}`;
            return `${basePath}${normalizedSrc}`;
          }
        }
        break;
      case 3:
        // Try with just the filename - sometimes GitHub Pages has issues with deeper paths
        if (isGitHub) {
          const filename = originalSrc.split("/").pop();
          if (filename) {
            return `/images/${filename}`;
          }
        }
        break;
      default:
        return null;
    }

    return null;
  };

  // Initial image source
  const [imageSrc, setImageSrc] = useState(props.src);
  // Track fallback attempts
  const [fallbackAttempt, setFallbackAttempt] = useState(0);

  // Effect to update paths once we're on the client
  useEffect(() => {
    // Check if we're running on GitHub Pages
    const isGitHub =
      typeof window !== "undefined" &&
      (window.location.hostname.includes("github.io") ||
        window.location.hostname.includes("sagegallant.github.io"));
    setIsGitHubPages(isGitHub);

    // Update image source with correct path
    const properSrc = getProperImageSrc(props.src, isGitHub);
    if (properSrc !== imageSrc) {
      setImageSrc(properSrc);
      // Reset loading status and fallback attempts when source changes
      setLoadingStatus("loading");
      setFallbackAttempt(0);
    }

    // Log for debugging
    if (process.env.NODE_ENV !== "production") {
      if (isGitHub) {
        console.log(
          "Running on GitHub Pages - Image path adjusted:",
          props.src,
          "→",
          properSrc
        );
      }
    }
  }, [props.src, imageSrc]);

  // Create a fallback image URL for error handling
  const handleImageError = (error: any) => {
    setLoadingStatus("error");
    console.error("Image failed to load:", imageSrc, error);

    // Forward the error to any provided error handler
    if (props.onError && typeof props.onError === "function") {
      props.onError(error);
    }

    // Try different fallback paths
    const nextAttempt = fallbackAttempt + 1;
    const fallbackSrc = generateFallbackSrc(
      props.src,
      isGitHubPages,
      nextAttempt
    );

    if (fallbackSrc && nextAttempt <= 3) {
      console.log(`Fallback attempt ${nextAttempt}:`, fallbackSrc);
      setFallbackAttempt(nextAttempt);
      setImageSrc(fallbackSrc);
    } else {
      // If we've exhausted fallbacks, show error state permanently
      console.error(`All fallback attempts failed for image: ${props.src}`);
    }
  };

  const handleImageLoad = () => {
    setLoadingStatus("success");
  };

  // If all fallback attempts have failed, show a more user-friendly error state
  if (loadingStatus === "error" && fallbackAttempt > 3) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${
          props.className || ""
        }`}
        style={{
          width: (props.width as number) || "100%",
          height: (props.height as number) || "100%",
          position: "relative",
          ...(props.style || {}),
        }}
      >
        <div className="text-gray-400 text-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">{props.alt || "Image not available"}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Image
        {...props}
        src={imageSrc}
        onError={handleImageError}
        onLoad={handleImageLoad}
        alt={props.alt || "Image"}
      />
      {loadingStatus === "error" && fallbackAttempt <= 3 && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
          Trying to load image...
        </div>
      )}
    </>
  );
};

export default ImageWithBasePath;
