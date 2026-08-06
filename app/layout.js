import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { siteConfig, siteUrl } from "@/data/siteConfig";
import { company } from "@/data/company";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "stainless steel supplier Ahmedabad",
    "alloy steel stockist Gujarat",
    "non-ferrous metal trader India",
    "stainless steel sheets plates pipes",
    "Inconel Hastelloy Monel supplier India",
    "ISO 9001 certified metal exporter",
    "Om Poonam Metal Overseas",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: company.legalTradeName,
  alternateName: siteConfig.shortName,
  url: siteUrl,
  logo: `${siteUrl}/icon-512.png`,
  image: `${siteUrl}/images/og-image.jpg`,
  description: siteConfig.description,
  foundingDate: String(company.founded),
  founder: {
    "@type": "Person",
    name: company.proprietor,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}, ${company.address.line3}`,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.pin,
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.contact.phoneE164,
      email: company.contact.email,
      contactType: "sales",
      areaServed: ["IN", "Worldwide"],
      availableLanguage: ["en", "hi", "gu"],
    },
  ],
  sameAs: [],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Store", "LocalBusiness"],
  "@id": `${siteUrl}/#localbusiness`,
  name: company.legalTradeName,
  image: `${siteUrl}/images/og-image.jpg`,
  telephone: company.contact.phoneE164,
  email: company.contact.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}, ${company.address.line3}`,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.pin,
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={localBusinessJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
