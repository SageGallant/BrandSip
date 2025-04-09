import type { Metadata } from "next";
import "../styles/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "BrandSip - Custom Branded Water Bottles for Hospitality",
  description:
    "Premium custom-branded water bottles for hotels, restaurants, and bars. Enhance your brand experience with every sip.",
  keywords:
    "custom water bottles, branded water, hospitality branding, hotel water bottles, restaurant branding",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
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
      </head>
      <body className="font-inter text-primary bg-white">
        {children}
        {/* Debug info script with better hydration handling */}
        <Script id="debug-info-script" strategy="afterInteractive">
          {`
            console.log('Current URL:', window.location.href);
            console.log('Pathname:', window.location.pathname);
            console.log('Hostname:', window.location.hostname);
            
            // Check if navigation needs to be fixed for GitHub Pages
            if (window.location.hostname.includes('github.io')) {
              console.log('Running on GitHub Pages');
            }

            // Show debug info in a safer way
            document.getElementById('debug-info').style.display = 'block';
            document.getElementById('path-info').innerText = 'Path: ' + window.location.pathname;
          `}
        </Script>
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
        </div>
      </body>
    </html>
  );
}
