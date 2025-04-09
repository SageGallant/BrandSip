import React, { useState } from "react";
import Image from "next/image";
import imageLoader from "../utils/image-loader";

/**
 * A wrapper around Next.js Image component that handles GitHub Pages base path
 * automatically for image sources. Also includes error handling for images.
 *
 * @param {string} src - The image source path
 * @param {object} props - All other props to pass to the Image component
 */
const ImageWithBasePath = ({ src, alt, onError, ...props }) => {
  const [imgError, setImgError] = useState(false);

  // Handle image load errors
  const handleError = (error) => {
    console.error(`Error loading image: ${src}`, error);
    setImgError(true);

    if (onError && typeof onError === "function") {
      onError(error);
    }
  };

  // If there was an error loading the image, show a fallback
  if (imgError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${
          props.className || ""
        }`}
        style={{
          width: props.width || "100%",
          height: props.height || "100%",
          ...props.style,
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
          <p className="text-sm">{alt || "Image not available"}</p>
        </div>
      </div>
    );
  }

  // Use our custom loader for all images
  return (
    <Image
      src={src}
      alt={alt || ""}
      loader={imageLoader}
      unoptimized={true} // For static exports
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithBasePath;
