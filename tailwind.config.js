/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0D3B66", // Deep Blue
        accent: "#00B4D8", // Aqua Blue
        gold: "#D4AF37", // Champagne Gold
        "light-gray": "#F8F9FA", // Light Grey
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        dark: "#121212",
        "dark-card": "#1e1e1e",
        "dark-header": "#1a1a1a",
      },
      textColor: {
        "dark-primary": "#ffffff",
        "dark-secondary": "#e0e0e0",
        "dark-muted": "#a0a0a0",
      },
      borderColor: {
        "dark-border": "#333333",
      },
    },
  },
  plugins: [],
};
