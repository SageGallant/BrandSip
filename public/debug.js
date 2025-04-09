// Debug script for GitHub Pages deployment
(function () {
  console.log("Debug script loaded");
  console.log("Current URL:", window.location.href);
  console.log("Hostname:", window.location.hostname);
  console.log("Pathname:", window.location.pathname);

  // Check if we're on GitHub Pages
  const isGitHubPages = window.location.hostname.includes("github.io");
  console.log("Is GitHub Pages:", isGitHubPages);

  // Log all script elements
  console.log("Scripts on page:");
  document.querySelectorAll("script").forEach((script, index) => {
    console.log(`Script ${index}:`, script.src || "inline script");
  });

  // Log all loaded CSS
  console.log("Stylesheets on page:");
  document.querySelectorAll('link[rel="stylesheet"]').forEach((link, index) => {
    console.log(`Stylesheet ${index}:`, link.href);
  });

  // Check for Next.js specific elements
  const nextDataElement = document.getElementById("__NEXT_DATA__");
  console.log("Next.js data element found:", !!nextDataElement);

  // Log asset loading failures
  window.addEventListener(
    "error",
    function (e) {
      if (
        e.target.tagName === "IMG" ||
        e.target.tagName === "SCRIPT" ||
        e.target.tagName === "LINK"
      ) {
        console.error("Failed to load asset:", e.target.src || e.target.href);
      }
    },
    true
  );

  // Log document structure
  console.log("HTML structure:");
  console.log(document.documentElement.outerHTML.substring(0, 500) + "...");
})();
