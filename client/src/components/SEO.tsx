import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  schema?: object;
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
  };
}

export default function SEO({ 
  title, 
  description, 
  image = "/og-image.png", 
  url,
  keywords = [],
  schema,
  article
}: SEOProps) {
  const { language } = useLanguage();
  
  // Brand name variations for better search matching
  const siteName = "BasisHK";
  const brandVariations = "Basis HK, BasisHK, Basis Hong Kong";
  
  const defaultTitle = language === 'en' 
    ? "Basis HK | BasisHK - Hong Kong's #1 AI Real Estate Marketing Agency" 
    : "Basis HK | BasisHK - 香港頂尖AI地產營銷公司";
  
  const defaultDescription = language === 'en'
    ? "Basis HK (BasisHK) is Hong Kong's leading PropTech company. We provide AI-powered property video production, automated lead generation, and digital marketing solutions for elite real estate agents. Founded in 2024, BasisHK transforms how properties are marketed across Asia."
    : "Basis HK (BasisHK) 是香港領先的地產科技公司。我們為精英地產代理提供 AI 驅動的樓盤影片製作、自動化客源開發及數碼營銷方案。BasisHK 成立於2024年，正在改變亞洲物業營銷方式。";

  // Enhanced keywords with brand name variations
  const defaultKeywords = language === 'en'
    ? [
        "Basis HK",
        "BasisHK",
        "Basis Hong Kong",
        "basis.hk",
        "Hong Kong real estate marketing agency",
        "property marketing agency Hong Kong",
        "real estate digital marketing HK",
        "PropTech Hong Kong",
        "AI real estate marketing",
        "property video marketing Hong Kong",
        "real estate lead generation Hong Kong",
        "luxury property marketing HK",
        "AI property videos Hong Kong",
        "BasisHK real estate",
        "Basis HK PropTech"
      ]
    : [
        "Basis HK",
        "BasisHK",
        "BasisHK公司",
        "Basis HK地產科技",
        "香港地產營銷公司",
        "房地產數碼營銷",
        "物業推廣服務",
        "地產科技香港",
        "AI地產營銷",
        "樓盤影片製作",
        "地產客源開發",
        "豪宅營銷香港",
        "AI樓盤影片香港"
      ];

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const siteUrl = "https://basis.hk";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const finalKeywords = [...defaultKeywords, ...keywords].join(", ");

  // Enhanced Organization Schema with brand variations
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://basis.hk/#organization",
    "name": "BasisHK",
    "legalName": "Basis HK Limited",
    "alternateName": ["Basis HK", "Basis Hong Kong", "BasisHK Real Estate Marketing", "Basis", "BASISHK"],
    "url": "https://basis.hk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://basis.hk/favicon.svg",
      "width": 512,
      "height": 512
    },
    "image": "https://basis.hk/og-image.png",
    "description": language === 'en' 
      ? "Basis HK (BasisHK) is Hong Kong's leading PropTech company specializing in AI-powered property videos, lead generation, and digital marketing for real estate agents."
      : "Basis HK (BasisHK) 是香港領先的地產科技公司，專注於 AI 驅動的樓盤影片、客源開發及地產代理數碼營銷。",
    "foundingDate": "2024",
    "founders": [
      {"@type": "Person", "name": "Michael Pang", "jobTitle": "CEO & Founder"},
      {"@type": "Person", "name": "Fabio Guaglione", "jobTitle": "COO & Co-Founder"},
      {"@type": "Person", "name": "Danish Agnihotri", "jobTitle": "CCO & Co-Founder"},
      {"@type": "Person", "name": "Carol Chan", "jobTitle": "CBDO & Co-Founder"}
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hong Kong",
      "addressRegion": "Hong Kong",
      "addressCountry": "HK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+852-6755-9118",
      "email": "business@basis.hk",
      "url": "https://calendly.com/business-basis/30min",
      "availableLanguage": ["English", "Chinese", "Cantonese"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/basis-hk/"
    ],
    "knowsAbout": [
      "Real Estate Marketing",
      "PropTech",
      "AI Video Generation",
      "Property Technology",
      "Lead Generation",
      "Digital Marketing",
      "Hong Kong Real Estate"
    ]
  };

  // Enhanced LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://basis.hk/#localbusiness",
    "name": "Basis HK - BasisHK Real Estate Marketing Agency",
    "alternateName": ["BasisHK", "Basis HK", "Basis Hong Kong"],
    "url": "https://basis.hk",
    "image": "https://basis.hk/og-image.png",
    "description": language === 'en'
      ? "Basis HK (BasisHK) provides AI-powered real estate marketing services in Hong Kong including property videos, lead generation, and digital marketing."
      : "Basis HK (BasisHK) 提供香港AI地產營銷服務，包括樓盤影片、客源開發及數碼營銷。",
    "telephone": "+852-6755-9118",
    "email": "business@basis.hk",
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
    "priceRange": "HK$8,000 - HK$25,000",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hong Kong"
    }
  };

  // Enhanced Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://basis.hk/#service",
    "serviceType": language === 'en' ? "AI Real Estate Marketing" : "AI地產營銷",
    "name": "BasisHK AI Real Estate Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "BasisHK",
      "@id": "https://basis.hk/#organization"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Hong Kong"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": language === 'en' ? "BasisHK Real Estate Marketing Plans" : "BasisHK地產營銷方案",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'en' ? "AI Property Video Production" : "AI 樓盤影片製作"
          },
          "price": "8000",
          "priceCurrency": "HKD"
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
      {/* Standard Meta Tags - Enhanced for Brand Search */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="BasisHK" />
      <link rel="canonical" href={fullUrl} />
      <html lang={language === 'en' ? 'en' : 'zh-HK'} />

      {/* Brand Name Meta Tags for AEO */}
      <meta name="application-name" content="BasisHK" />
      <meta name="apple-mobile-web-app-title" content="BasisHK" />

      {/* Hreflang Tags for Language Versions */}
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <link rel="alternate" hrefLang="zh-HK" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Open Graph / Facebook - Enhanced with Brand */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`Basis HK - BasisHK - ${title || 'Hong Kong Real Estate Marketing'}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language === 'en' ? 'en_HK' : 'zh_HK'} />

      {/* Article Meta Tags (for blog posts) */}
      {article && (
        <>
          <meta property="article:author" content={article.author} />
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.section && <meta property="article:section" content={article.section} />}
          <meta property="article:publisher" content="https://basis.hk" />
        </>
      )}

      {/* Twitter - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={`Basis HK - BasisHK - ${title || 'Hong Kong Real Estate Marketing'}`} />
      <meta name="twitter:site" content="@basishk" />
      <meta name="twitter:creator" content="@basishk" />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="HK" />
      <meta name="geo.placename" content="Hong Kong" />
      <meta name="geo.position" content="22.3193;114.1694" />
      <meta name="ICBM" content="22.3193, 114.1694" />

      {/* Dublin Core Metadata for Enhanced Discovery */}
      <meta name="DC.title" content={fullTitle} />
      <meta name="DC.creator" content="BasisHK" />
      <meta name="DC.subject" content="Real Estate Marketing, PropTech, AI, Hong Kong" />
      <meta name="DC.description" content={finalDescription} />
      <meta name="DC.publisher" content="BasisHK" />
      <meta name="DC.language" content={language === 'en' ? 'en' : 'zh-HK'} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
}
