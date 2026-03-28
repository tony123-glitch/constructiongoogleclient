import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Bankhead Construction LLC | Reliable Construction in St. Louis",
  description: "Bankhead Construction LLC provides premium drywall repair, flooring, interior painting, tile work, and general construction services in St. Louis, MO.",
  keywords: ["Construction company St. Louis", "Drywall repair St. Louis", "Flooring installation St. Louis", "General contractor St. Louis", "General Repairs", "Interior painting"],
  authors: [{ name: "Bankhead Construction LLC" }],
  creator: "Bankhead Construction LLC",
  publisher: "Bankhead Construction LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Bankhead Construction LLC",
    "image": "https://images.unsplash.com/photo-1541888081628-3e4b77fcc652?q=80&w=2070&auto=format&fit=crop",
    "url": "https://bankheadconstruction.com",
    "telephone": "+13145550198",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Build Way",
      "addressLocality": "St. Louis",
      "addressRegion": "MO",
      "postalCode": "63101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.627003,
      "longitude": -90.199402
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": []
  };

  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${outfit.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
