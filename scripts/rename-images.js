#!/usr/bin/env node

/**
 * This script renames image files in the public/images directory to lowercase
 * to avoid case sensitivity issues with GitHub Pages (which runs on Linux).
 */

const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(process.cwd(), "public", "images");

// Check if directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  console.error(`Error: Directory ${IMAGES_DIR} does not exist`);
  process.exit(1);
}

console.log("Renaming image files to lowercase...");

// Get all files in directory
const files = fs.readdirSync(IMAGES_DIR);

let renamedCount = 0;
let skippedCount = 0;

// Process each file
files.forEach((filename) => {
  const lowercaseFilename = filename.toLowerCase();

  // Skip if filename is already lowercase
  if (filename === lowercaseFilename) {
    console.log(`Skipping (already lowercase): ${filename}`);
    skippedCount++;
    return;
  }

  const oldPath = path.join(IMAGES_DIR, filename);
  const newPath = path.join(IMAGES_DIR, lowercaseFilename);

  // If the lowercase filename already exists, don't overwrite it
  if (fs.existsSync(newPath) && oldPath !== newPath) {
    console.log(`Skipping (lowercase version already exists): ${filename}`);
    skippedCount++;
    return;
  }

  try {
    // Use a temporary name to avoid case sensitivity issues on Windows
    const tempPath = path.join(
      IMAGES_DIR,
      `temp_${Date.now()}_${lowercaseFilename}`
    );
    fs.renameSync(oldPath, tempPath);
    fs.renameSync(tempPath, newPath);
    console.log(`Renamed: ${filename} → ${lowercaseFilename}`);
    renamedCount++;
  } catch (error) {
    console.error(`Error renaming ${filename}:`, error.message);
  }
});

console.log("\nSummary:");
console.log(`Total files: ${files.length}`);
console.log(`Renamed: ${renamedCount}`);
console.log(`Skipped: ${skippedCount}`);

if (renamedCount > 0) {
  console.log("\nIMPORTANT: Remember to commit the renamed files to git!");
  console.log(
    'Run: git add public/images && git commit -m "Rename image files to lowercase"'
  );
}
