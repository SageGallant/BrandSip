"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Use a simpler initial state for server-side rendering
  const [theme, setTheme] = useState<Theme>("light");
  // Use a state to track if we've initialized from client storage
  const [isInitialized, setIsInitialized] = useState(false);

  // Effect for initializing theme from localStorage
  useEffect(() => {
    // Skip if already initialized
    if (isInitialized) return;

    const savedTheme = localStorage.getItem("theme") as Theme;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    setIsInitialized(true);
  }, [isInitialized]);

  // Effect for applying theme
  useEffect(() => {
    if (!isInitialized && typeof window === "undefined") return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    if (isInitialized) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, isInitialized]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
