import { Html, Head, Main, NextScript } from "next/document";
import fs from "fs";
import path from "path";

export default function Document() {
  // Include critical CSS inline
  let criticalCSS = "";
  try {
    // For production build
    if (process.env.NODE_ENV === "production") {
      const cssPath = path.join(process.cwd(), "public", "critical.css");
      criticalCSS = fs.readFileSync(cssPath, "utf8");
    }
  } catch (e) {
    console.error("Error reading critical CSS:", e);
  }

  // Get correct basePath
  const basePath = process.env.NODE_ENV === "production" ? "/BrandSip" : "";

  return (
    <Html lang="en">
      <Head>
        {/* Add critical CSS inline */}
        {criticalCSS && (
          <style
            dangerouslySetInnerHTML={{
              __html: criticalCSS,
            }}
          />
        )}
        {/* Add link to standard CSS files with correct basePath */}
        <link rel="stylesheet" href={`${basePath}/styles.css`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
