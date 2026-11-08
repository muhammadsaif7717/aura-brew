import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const viewport: Viewport = {
  themeColor: "#3f271e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aurabrew-cafe.com"),
  title: {
    default: "AuraBrew | Artisanal Coffee Shop & Specialty Roastery",
    template: "%s | AuraBrew Coffee Co.",
  },
  description:
    "Welcome to AuraBrew — Premier artisanal coffee shop and specialty micro-roastery. Enjoy ethically sourced single-origin beans, precision espresso, pour-overs, and freshly baked artisanal pastries.",
  keywords: [
    "AuraBrew",
    "coffee shop",
    "artisanal coffee",
    "specialty coffee roastery",
    "single origin coffee beans",
    "espresso bar",
    "pour over coffee",
    "cold brew",
    "table booking cafe",
    "coffeehouse",
    "gourmet pastries",
    "barista coffee",
  ],
  authors: [{ name: "AuraBrew Roasting & Culinary Team" }],
  creator: "AuraBrew Coffee Co.",
  publisher: "AuraBrew Artisanal Roastery",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AuraBrew | Artisanal Coffee Shop & Specialty Roastery",
    description:
      "Handcrafted single-origin coffee, artisan espresso, and fresh pastries in a warm heritage cafe ambiance.",
    url: "https://aurabrew-cafe.com",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "AuraBrew Artisanal Roastery & Cafe",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraBrew | Artisanal Coffee Shop & Specialty Roastery",
    description:
      "Handcrafted single-origin coffee, artisan espresso, and fresh pastries in a warm heritage cafe ambiance.",
    images: ["/img/slider/slider_bg.png"],
    creator: "@AuraBrewCoffee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "AuraBrew Artisanal Coffee & Roastery",
  image: "https://aurabrew-cafe.com/img/slider/slider_bg.png",
  "@id": "https://aurabrew-cafe.com",
  url: "https://aurabrew-cafe.com",
  telephone: "+1-800-121-3637",
  priceRange: "$$",
  menu: "https://aurabrew-cafe.com/menu",
  servesCuisine: ["Coffee", "Artisanal Espresso", "Bakery", "Breakfast", "Pastries"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1247/Plot No. 39, 15th Phase, LHB Colony",
    addressLocality: "Melbourne",
    postalCode: "3004",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.8385,
    longitude: 144.9753,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://facebook.com/AuraBrewCoffee",
    "https://instagram.com/AuraBrewCoffee",
    "https://twitter.com/AuraBrewCoffee",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Template Stylesheets */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/css/dripicons.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/meanmenu.css" />
        <link rel="stylesheet" href="/css/default.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />

        {/* Structured Data / JSON-LD for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
