import type { Metadata } from "next";
import { company } from "@/lib/content";

const siteUrl = "https://www.apexplumbinglondon.co.uk";

export function buildMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: company.name,
      locale: "en_GB",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: company.name,
    telephone: `+44${company.phoneRaw.substring(1)}`,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.addressLine,
      addressLocality: company.city,
      postalCode: company.postcode,
      addressCountry: "GB"
    },
    areaServed: "London",
    openingHours: "Mo-Su 00:00-23:59",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "286"
    },
    url: siteUrl
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`
    }))
  };
}
