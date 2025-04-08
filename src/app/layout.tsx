import type { Metadata } from "next";
import "../styles/globals.css";

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
      </head>
      <body className="font-inter text-primary bg-white">{children}</body>
    </html>
  );
}
