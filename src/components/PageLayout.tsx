"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "../contexts/ThemeContext";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PageLayout;
