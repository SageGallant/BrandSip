#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

console.log(`${colors.cyan}Tailwind CSS Installation Checker${colors.reset}`);
console.log("================================================\n");

// Check if package.json exists
console.log(`${colors.blue}Checking package.json...${colors.reset}`);
try {
  const packageJsonPath = path.resolve(__dirname, "../package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  // Check tailwindcss in dependencies
  const hasTailwindDev =
    packageJson.devDependencies && packageJson.devDependencies.tailwindcss;
  const hasTailwindDep =
    packageJson.dependencies && packageJson.dependencies.tailwindcss;

  if (hasTailwindDev || hasTailwindDep) {
    console.log(
      `${colors.green}✓ Tailwind CSS is in package.json${colors.reset}`
    );
    console.log(`  Version: ${hasTailwindDev || hasTailwindDep}`);
  } else {
    console.log(
      `${colors.red}✗ Tailwind CSS is missing in package.json${colors.reset}`
    );
    console.log(`${colors.yellow}Installing Tailwind CSS...${colors.reset}`);
    execSync("npm install tailwindcss postcss autoprefixer --save-dev", {
      stdio: "inherit",
    });
  }
} catch (error) {
  console.error(
    `${colors.red}Error checking package.json:${colors.reset}`,
    error.message
  );
}

// Check tailwind.config.js
console.log(`\n${colors.blue}Checking tailwind.config.js...${colors.reset}`);
try {
  const tailwindConfigPath = path.resolve(__dirname, "../tailwind.config.js");
  if (fs.existsSync(tailwindConfigPath)) {
    console.log(`${colors.green}✓ tailwind.config.js exists${colors.reset}`);

    // Print content
    const tailwindConfig = fs.readFileSync(tailwindConfigPath, "utf8");
    console.log(`\nContent of tailwind.config.js:`);
    console.log(tailwindConfig);
  } else {
    console.log(`${colors.red}✗ tailwind.config.js is missing${colors.reset}`);
    console.log(
      `${colors.yellow}Creating a basic tailwind.config.js...${colors.reset}`
    );

    // Create a basic tailwind.config.js
    const basicConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;
    fs.writeFileSync(tailwindConfigPath, basicConfig);
    console.log(
      `${colors.green}✓ Basic tailwind.config.js created${colors.reset}`
    );
  }
} catch (error) {
  console.error(
    `${colors.red}Error checking tailwind.config.js:${colors.reset}`,
    error.message
  );
}

// Check postcss.config.js
console.log(`\n${colors.blue}Checking postcss.config.js...${colors.reset}`);
try {
  const postcssConfigPath = path.resolve(__dirname, "../postcss.config.js");
  if (fs.existsSync(postcssConfigPath)) {
    console.log(`${colors.green}✓ postcss.config.js exists${colors.reset}`);

    // Print content
    const postcssConfig = fs.readFileSync(postcssConfigPath, "utf8");
    console.log(`\nContent of postcss.config.js:`);
    console.log(postcssConfig);
  } else {
    console.log(`${colors.red}✗ postcss.config.js is missing${colors.reset}`);
    console.log(
      `${colors.yellow}Creating a basic postcss.config.js...${colors.reset}`
    );

    // Create a basic postcss.config.js
    const basicConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`;
    fs.writeFileSync(postcssConfigPath, basicConfig);
    console.log(
      `${colors.green}✓ Basic postcss.config.js created${colors.reset}`
    );
  }
} catch (error) {
  console.error(
    `${colors.red}Error checking postcss.config.js:${colors.reset}`,
    error.message
  );
}

// Check globals.css
console.log(`\n${colors.blue}Checking globals.css...${colors.reset}`);
try {
  const globalsCssPath = path.resolve(__dirname, "../src/styles/globals.css");
  if (fs.existsSync(globalsCssPath)) {
    console.log(`${colors.green}✓ globals.css exists${colors.reset}`);

    // Check if it has Tailwind directives
    const globalsCss = fs.readFileSync(globalsCssPath, "utf8");
    if (globalsCss.includes("@tailwind")) {
      console.log(
        `${colors.green}✓ Tailwind directives found in globals.css${colors.reset}`
      );
    } else {
      console.log(
        `${colors.yellow}! Tailwind directives not found in globals.css${colors.reset}`
      );
      console.log(
        `${colors.yellow}Adding Tailwind directives to globals.css...${colors.reset}`
      );

      // Add Tailwind directives to globals.css
      const updatedGlobalsCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

${globalsCss}`;
      fs.writeFileSync(globalsCssPath, updatedGlobalsCss);
      console.log(
        `${colors.green}✓ Tailwind directives added to globals.css${colors.reset}`
      );
    }
  } else {
    console.log(`${colors.red}✗ globals.css is missing${colors.reset}`);
    console.log(
      `${colors.yellow}Creating a basic globals.css with Tailwind directives...${colors.reset}`
    );

    // Create src/styles directory if it doesn't exist
    const stylesDirPath = path.resolve(__dirname, "../src/styles");
    if (!fs.existsSync(stylesDirPath)) {
      fs.mkdirSync(stylesDirPath, { recursive: true });
    }

    // Create a basic globals.css
    const basicGlobalsCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom styles go here */
`;
    fs.writeFileSync(globalsCssPath, basicGlobalsCss);
    console.log(
      `${colors.green}✓ Basic globals.css created with Tailwind directives${colors.reset}`
    );
  }
} catch (error) {
  console.error(
    `${colors.red}Error checking globals.css:${colors.reset}`,
    error.message
  );
}

console.log(`\n${colors.green}Tailwind CSS check completed!${colors.reset}`);
