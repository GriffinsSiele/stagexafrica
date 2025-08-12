import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://stagexafrica.com"),
  title: "Sawmill & Furniture Shop in Kericho | StagexAfrica",
  description: "StagexAfrica is the leading sawmill and furniture shop in Kericho, Kenya. We offer premium timber, custom woodworking, and sustainable solutions. Visit us for quality furniture and timber products.",
  keywords: "sawmill, furniture shop, Kericho, timber, woodworking, Kenya, StagexAfrica, custom wood, construction, interior design",
  openGraph: {
    title: "Sawmill & Furniture Shop in Kericho | StagexAfrica",
    description: "StagexAfrica is the leading sawmill and furniture shop in Kericho, Kenya. We offer premium timber, custom woodworking, and sustainable solutions.",
    url: "https://stagexafrica.com/",
    siteName: "StagexAfrica",
    images: [
      {
        url: "/images/heroimg.jpg",
        width: 1200,
        height: 630,
        alt: "StagexAfrica Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <title>{metadata.title}</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          \"@context\": \"https://schema.org\",
          \"@type\": \"Sawmill\",
          \"name\": \"StagexAfrica\",
          \"image\": \"https://stagexafrica.com/images/heroimg.jpg\",
          \"address\": {
            \"@type\": \"PostalAddress\",
            \"streetAddress\": \"Londiani Junction, Kericho\",
            \"addressLocality\": \"Kericho\",
            \"addressCountry\": \"KE\"
          },
          \"url\": \"https://stagexafrica.com\",
          \"telephone\": \"+254 702 648 366\",
          \"description\": \"Sawmill and furniture shop in Kericho, Kenya. Premium timber and woodworking solutions.\"
        }` }} />
      </head>
      <body>
        <Script 
          src="https://kit.fontawesome.com/f99459d9b8.js" 
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <main id="main-content" tabIndex={-1} aria-label="Main content">
          {children}
        </main>
      </body>
    </html>
  );
}
