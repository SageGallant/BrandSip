import type { Metadata } from "next";
import "../styles/globals.css";
import { getBasePath } from "../utils/path-utils";
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
  const basePath = getBasePath();

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.process = {
                env: {
                  NEXT_PUBLIC_BASE_PATH: "${basePath}"
                }
              };
              
              // Store the URL if it's a 404 redirect
              if (window.location.search && window.location.search.includes('p=')) {
                sessionStorage.redirect = window.location.href;
              }
            `,
          }}
        />
      </head>
      <body className="font-inter text-primary bg-white">
        {children}
        <Script
          src={`${basePath}/index-redirect.js`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
