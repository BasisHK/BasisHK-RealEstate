import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  schema?: object;
}

export default function SEO({ 
  title, 
  description, 
  image = "/og-image.png", 
  url,
  keywords = [],
  schema
}: SEOProps) {
  const { language } = useLanguage();
  
  const siteName = "BasisHK";
  const defaultTitle = language === 'en' 
    ? "BasisHK | Hong Kong Real Estate Marketing Agency | PropTech Solutions" 
    : "BasisHK | 香港地產營銷公司 | 房地產科技方案";
  
  const defaultDescription = language === 'en'
    ? "BasisHK is Hong Kong's leading real estate marketing agency. We provide AI-powered property video production, lead generation, and digital marketing solutions for elite real estate agents and developers."
    : "BasisHK 是香港領先的地產營銷公司。我們為精英地產代理及發展商提供 AI 驅動的樓盤影片製作、客源開發及數碼營銷方案。";

  const defaultKeywords = language === 'en'
    ? [
        "Hong Kong real estate marketing agency",
        "property marketing agency Hong Kong",
        "real estate digital marketing HK",
        "PropTech Hong Kong",
        "AI real estate marketing",
        "property video marketing Hong Kong",
        "real estate lead generation Hong Kong",
        "luxury property marketing HK",
        "real estate chatbot Hong Kong",
        "property listing optimization"
      ]
    : [
        "香港地產營銷公司",
        "房地產數碼營銷",
        "物業推廣服務",
        "地產科技香港",
        "AI地產營銷",
        "樓盤影片製作",
        "地產客源開發",
        "豪宅營銷香港",
        "地產聊天機器人",
        "樓盤列表優化"
      ];

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const siteUrl = "https://basis.hk";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const finalKeywords = [...defaultKeywords, ...keywords].join(", ");

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BasisHK",
    "alternateName": "Basis HK",
    "url": "https://basis.hk",
    "logo": "https://basis.hk/favicon.svg",
    "description": language === 'en' 
      ? "Hong Kong's leading real estate marketing agency specializing in AI-powered property videos, lead generation, and digital marketing for real estate agents."
      : "香港領先的地產營銷公司，專注於 AI 驅動的樓盤影片、客源開發及地產代理數碼營銷。",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hong Kong",
      "addressRegion": "Hong Kong",
      "addressCountry": "HK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "url": "https://basis.hk/contact"
    },
    "sameAs": [
      "https://www.linkedin.com/company/basishk",
      "https://www.instagram.com/basishk"
    ]
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BasisHK",
    "@id": "https://basis.hk",
    "url": "https://basis.hk",
    "image": "https://basis.hk/og-image.png",
    "description": language === 'en'
      ? "Real estate marketing agency in Hong Kong offering AI property videos, lead generation, and digital marketing services."
      : "香港地產營銷公司，提供 AI 樓盤影片、客源開發及數碼營銷服務。",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hong Kong",
      "addressCountry": "HK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.3193",
      "longitude": "114.1694"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": language === 'en' ? "Real Estate Marketing" : "地產營銷",
    "provider": {
      "@type": "Organization",
      "name": "BasisHK"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Hong Kong"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": language === 'en' ? "Real Estate Marketing Services" : "地產營銷服務",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'en' ? "AI Property Video Production" : "AI 樓盤影片製作"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'en' ? "Real Estate Lead Generation" : "地產客源開發"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'en' ? "Property Digital Marketing" : "物業數碼營銷"
          }
        }
      ]
    }
  };

  const combinedSchema = schema || [organizationSchema, localBusinessSchema, serviceSchema];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="BasisHK" />
      <link rel="canonical" href={fullUrl} />
      <html lang={language === 'en' ? 'en' : 'zh-HK'} />

      {/* Hreflang Tags for Language Versions */}
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <link rel="alternate" hrefLang="zh-HK" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : 'zh_HK'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={fullImage} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="HK" />
      <meta name="geo.placename" content="Hong Kong" />
      <meta name="geo.position" content="22.3193;114.1694" />
      <meta name="ICBM" content="22.3193, 114.1694" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
}
