import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/websiteData';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  type?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl = window.location.href,
  keywords = "Pharmacy in Jehanabad, Medical Store Jehanabad Bihar, Genuine Medicines Arya Medical Hall, Medicine Shop Bihar, Online Medicine Delivery Jehanabad, Medical Equipment",
  type = "website",
  schema
}) => {
  useEffect(() => {
    // Update Title
    const fullTitle = `${title} | ${BUSINESS_INFO.name} - Jehanabad`;
    document.title = fullTitle;

    // Helper to update meta tags
    const updateMeta = (nameAttr: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('name', 'description', description);
    updateMeta('name', 'keywords', keywords);

    // Open Graph
    updateMeta('property', 'og:title', fullTitle);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:type', type);
    updateMeta('property', 'og:url', canonicalUrl);
    updateMeta('property', 'og:site_name', BUSINESS_INFO.name);

    // Twitter Card
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', fullTitle);
    updateMeta('name', 'twitter:description', description);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Dynamic JSON-LD injection
    let scriptTag = document.getElementById('seo-json-ld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', 'seo-json-ld');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const defaultPharmacySchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": BUSINESS_INFO.name,
      "description": BUSINESS_INFO.tagline,
      "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80",
      "telephone": BUSINESS_INFO.formattedPhone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Sadar Hospital Chowk, Main Road",
        "addressLocality": "Jehanabad",
        "addressRegion": "Bihar",
        "postalCode": "804408",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2138",
        "longitude": "84.9868"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "priceRange": "₹"
    };

    const finalSchema = schema ? [defaultPharmacySchema, schema] : defaultPharmacySchema;
    scriptTag.textContent = JSON.stringify(finalSchema);

  }, [title, description, canonicalUrl, keywords, type, schema]);

  return null;
};
