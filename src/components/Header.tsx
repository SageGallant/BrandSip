"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white dark:bg-dark-header shadow-sm dark:shadow-none z-50 transition-colors duration-300">
      <div className="container-wide flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-primary dark:text-accent">
            BrandSip
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
          >
            Products
          </Link>
          <Link
            href="/industries"
            className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
          >
            Industries
          </Link>
          <Link
            href="/vision"
            className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
          >
            Vision
          </Link>
          <Link
            href="/investors"
            className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
          >
            Investors
          </Link>
          <Link
            href="/contact"
            className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Right side section with Theme toggle and CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/contact">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Sample
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-primary dark:text-dark-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-dark-header shadow-lg dark:shadow-none"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-wide flex flex-col space-y-4 py-6 px-4">
            <Link
              href="/"
              className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              href="/industries"
              className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Industries
            </Link>
            <Link
              href="/vision"
              className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Vision
            </Link>
            <Link
              href="/investors"
              className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Investors
            </Link>
            <Link
              href="/contact"
              className="font-montserrat text-primary dark:text-dark-primary hover:text-accent dark:hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link href="/contact" className="block mt-4" onClick={toggleMenu}>
              <button className="btn-primary w-full">Request a Sample</button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
