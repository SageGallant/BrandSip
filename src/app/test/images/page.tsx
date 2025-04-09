"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageWithBasePath from "../../../components/ImageWithBasePath";
import PageLayout from "../../../components/PageLayout";

const ImageTestPage = () => {
  const [isGitHubPages, setIsGitHubPages] = useState(false);
  const [hostname, setHostname] = useState("");
  const [basePath, setBasePath] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const [successCount, setSuccessCount] = useState(0);

  useEffect(() => {
    // Check if we're running on GitHub Pages
    const isGitHub =
      typeof window !== "undefined" &&
      (window.location.hostname.includes("github.io") ||
        window.location.hostname.includes("sagegallant.github.io"));
    setIsGitHubPages(isGitHub);
    setHostname(window.location.hostname || "");
    setBasePath(isGitHub ? "/BrandSip" : "");
  }, []);

  // List of test images to try
  const testImages = [
    { path: "/images/hotel.png", description: "Hotel Image (lowercase)" },
    { path: "/images/dining.png", description: "Dining Image (lowercase)" },
    { path: "/images/cafe.png", description: "Cafe Image (lowercase)" },
    { path: "/images/heritage.png", description: "Heritage Image (lowercase)" },
    { path: "/images/lounge.png", description: "Lounge Image (lowercase)" },
    { path: "/images/custom.png", description: "Custom Image (lowercase)" },
    { path: "/images/hero-bg.jpg", description: "Hero Background" },
  ];

  // Case sensitivity test images
  const caseSensitivityTests = [
    { path: "/images/hotel.png", description: "Lowercase: /images/hotel.png" },
    { path: "/Images/hotel.png", description: "Capital I: /Images/hotel.png" },
    { path: "/IMAGES/hotel.png", description: "All caps: /IMAGES/hotel.png" },
    {
      path: "/images/HOTEL.png",
      description: "Uppercase filename: /images/HOTEL.png",
    },
    { path: "/images/Hotel.png", description: "Mixed case: /images/Hotel.png" },
  ];

  // Intentional error test cases
  const errorTestImages = [
    { path: "/images/missing.png", description: "Non-existent image" },
    { path: "/images/Hotel.PNG", description: "Wrong extension case" },
    { path: "/images/wrong-path.png", description: "Wrong path" },
  ];

  const handleImageLoad = () => {
    setSuccessCount((prev) => prev + 1);
  };

  const handleImageError = () => {
    setErrorCount((prev) => prev + 1);
  };

  return (
    <PageLayout>
      <div className="container-wide py-12">
        <h1 className="text-3xl font-bold mb-8">Image Loading Test Page</h1>
        <div className="bg-green-100 p-3 rounded mb-4">
          <p className="font-medium">
            Success: {successCount} | Errors: {errorCount}
          </p>
        </div>

        {/* Environment Information */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Environment Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <p>
                <strong>Hostname:</strong> {hostname}
              </p>
              <p>
                <strong>GitHub Pages:</strong> {isGitHubPages ? "Yes" : "No"}
              </p>
              <p>
                <strong>Base Path:</strong> {basePath}
              </p>
              <p>
                <strong>Full URL:</strong>{" "}
                {typeof window !== "undefined" ? window.location.href : ""}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Note: This page tests various image loading scenarios to help
                identify and debug potential issues with image paths.
              </p>
            </div>
          </div>
        </div>

        {/* Standard Image Test Section */}
        <h2 className="text-xl font-semibold mb-4">
          Testing ImageWithBasePath Component
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testImages.map((img, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">{img.description}</h3>
              <p className="text-sm text-gray-500 mb-2">Path: {img.path}</p>
              <div className="relative h-48 overflow-hidden rounded border bg-gray-50">
                <ImageWithBasePath
                  src={img.path}
                  alt={img.description}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Case Sensitivity Tests */}
        <h2 className="text-xl font-semibold mb-4">Case Sensitivity Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseSensitivityTests.map((img, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">{img.description}</h3>
              <div className="relative h-48 overflow-hidden rounded border bg-gray-50">
                <ImageWithBasePath
                  src={img.path}
                  alt={img.description}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Error Tests */}
        <h2 className="text-xl font-semibold mb-4">Error Handling Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {errorTestImages.map((img, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">{img.description}</h3>
              <p className="text-sm text-gray-500 mb-2">Path: {img.path}</p>
              <div className="relative h-48 overflow-hidden rounded border bg-gray-50">
                <ImageWithBasePath
                  src={img.path}
                  alt={img.description}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Direct Image Component Test */}
        <h2 className="text-xl font-semibold mb-4">
          Testing Next.js Image Component Directly
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testImages.map((img, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">{img.description}</h3>
              <p className="text-sm text-gray-500 mb-2">Path: {img.path}</p>
              <div className="relative h-48 overflow-hidden rounded border bg-gray-50">
                <Image
                  src={isGitHubPages ? `/BrandSip${img.path}` : img.path}
                  alt={img.description}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Remote Image Test */}
        <h2 className="text-xl font-semibold mb-4">Testing Remote Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Unsplash Image</h3>
            <p className="text-sm text-gray-500 mb-2">Remote URL</p>
            <div className="relative h-48 overflow-hidden rounded border bg-gray-50">
              <ImageWithBasePath
                src="https://images.unsplash.com/photo-1513269890276-36e661f6de1b?q=80&w=600"
                alt="Remote Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Direct Next.js Image</h3>
            <p className="text-sm text-gray-500 mb-2">Remote URL</p>
            <div className="relative h-48 overflow-hidden rounded border bg-gray-50">
              <Image
                src="https://images.unsplash.com/photo-1513269890276-36e661f6de1b?q=80&w=600"
                alt="Remote Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center">
          <Link href="/" className="text-primary hover:underline mr-4">
            Back to Home
          </Link>
          <Link href="/products" className="text-primary hover:underline">
            View Products
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default ImageTestPage;
