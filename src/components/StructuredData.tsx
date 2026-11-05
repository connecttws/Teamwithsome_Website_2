import React from "react";
import { SITE_METADATA, FAQS, CORE_SERVICES } from "@/data/siteData";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_METADATA.siteUrl}/#organization`,
    name: SITE_METADATA.agencyName,
    alternateName: ["TWS", "Team With Someone Health Marketing"],
    url: SITE_METADATA.siteUrl,
    logo: SITE_METADATA.logoUrl,
    description: SITE_METADATA.description,
    telephone: SITE_METADATA.phone,
    email: SITE_METADATA.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "DLF Cyber City, Sector 24",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    sameAs: [
      SITE_METADATA.socials.linkedin,
      SITE_METADATA.socials.instagram,
      SITE_METADATA.socials.facebook,
    ],
    priceRange: "$$",
    knowsAbout: [
      "Digital Marketing Agency for Health & Wellness",
      "digital marketing agency for healthcare",
      "Meta Ads for Doctors",
      "Healthcare SEO Services",
      "Patient Lead Generation",
      "Dietitian Marketing Funnels",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_METADATA.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_METADATA.siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About Us",
        item: `${SITE_METADATA.siteUrl}/about-us`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Case Studies",
        item: `${SITE_METADATA.siteUrl}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact Us",
        item: `${SITE_METADATA.siteUrl}/contact-us`,
      },
    ],
  };

  const localSeoSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Team With Someone - Healthcare Digital Marketing & Local SEO",
    image: SITE_METADATA.logoUrl,
    "@id": `${SITE_METADATA.siteUrl}/#localseo`,
    url: SITE_METADATA.siteUrl,
    telephone: SITE_METADATA.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "DLF Cyber City, Sector 24",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4905,
      longitude: 77.0945,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Healthcare Digital Marketing Services",
      itemListElement: CORE_SERVICES.map((srv) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: srv.h3Title,
          description: srv.shortDesc,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoSchema) }}
      />
    </>
  );
}
