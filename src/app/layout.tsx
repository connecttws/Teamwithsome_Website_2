import type { Metadata, Viewport } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { SITE_METADATA } from "@/data/siteData";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: {
    default: "Digital Marketing Agency for Health & Wellness | Team With Someone",
    template: "%s | Team With Someone",
  },
  description:
    "Team With Someone is a digital marketing agency for health and wellness, helping doctors, dietitians and nutritionists grow their online presence.",
  keywords: SITE_METADATA.keywords,
  alternates: {
    canonical: SITE_METADATA.canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_METADATA.siteUrl,
    title: "Digital Marketing Agency for Health & Wellness | Team With Someone",
    description:
      "Team With Someone is a digital marketing agency for health and wellness, helping doctors, dietitians and nutritionists grow their online presence.",
    siteName: "Team With Someone",
    images: [
      {
        url: SITE_METADATA.logoUrl,
        width: 800,
        height: 600,
        alt: "Team With Someone - Digital Marketing Agency for Health & Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency for Health & Wellness | Team With Someone",
    description:
      "Team With Someone is a digital marketing agency for health and wellness, helping doctors, dietitians and nutritionists grow their online presence.",
    images: [SITE_METADATA.logoUrl],
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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_METADATA.canonicalUrl} />
        <StructuredData />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
