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

  useEffect(() => {
    // Check if we're running on GitHub Pages
    const isGitHub =
      typeof window !== "undefined" &&
      window.location.hostname.includes("github.io");
    setIsGitHubPages(isGitHub);
    setHostname(window.location.hostname || "");
    setBasePath(isGitHub ? "/BrandSip" : "");
  }, []);

  // List of test images to try
  const testImages = [
    { path: "/images/Hotel.png", description: "Hotel Image" },
    { path: "/images/Dining.png", description: "Dining Image" },
    { path: "/images/Cafe.png", description: "Cafe Image" },
    { path: "/images/Heritage.png", description: "Heritage Image" },
    { path: "/images/lounge.png", description: "Lounge Image" },
    { path: "/images/Custom.png", description: "Custom Image" },
  ];

  return (
    <PageLayout>
      <div className="container-wide py-12">
        <h1 className="text-3xl font-bold mb-8">Image Loading Test Page</h1>

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
            </div>
          </div>
        </div>

        {/* Image Test Section */}
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
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center">
          <Link href="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default ImageTestPage;
