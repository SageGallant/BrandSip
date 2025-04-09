import type { Metadata } from "next";
import "../styles/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "BrandSip - Custom Branded Water Bottles for Hospitality",
  description:
    "Premium custom-branded water bottles for hotels, restaurants, and bars. Enhance your brand experience with every sip.",
  keywords:
    "custom water bottles, branded water, hospitality branding, hotel water bottles, restaurant branding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lato:wght@400;700&family=Montserrat:wght@500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Debug script for detecting paths on GitHub Pages */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('Current URL:', window.location.href);
              console.log('Pathname:', window.location.pathname);
              console.log('Hostname:', window.location.hostname);
              
              // Check if navigation needs to be fixed for GitHub Pages
              if (window.location.hostname.includes('github.io')) {
                console.log('Running on GitHub Pages');
              }
            `,
          }}
        />
      </head>
      <body className="font-inter text-primary bg-white">
        {children}
        {/* Add a simple troubleshooting element */}
        <div
          id="debug-info"
          style={{
            display: "none",
            position: "fixed",
            bottom: "10px",
            right: "10px",
            background: "white",
            padding: "10px",
            border: "1px solid black",
            zIndex: 9999,
          }}
        >
          <p>Debug Info</p>
          <p id="path-info"></p>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            document.getElementById('debug-info').style.display = 'block';
            document.getElementById('path-info').innerText = 'Path: ' + window.location.pathname;
          `,
            }}
          />
        </div>
      </body>
    </html>
  );
}
