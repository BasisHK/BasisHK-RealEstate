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
    ? "Basis HK | BasisHK - AI Real Estate CRM Platform & Marketing Agency in Hong Kong" 
    : "Basis HK | BasisHK - 香港 AI 地產 CRM 平台及營銷代理";
  
  const defaultDescription = language === 'en'
    ? "Basis HK (BasisHK) is Hong Kong's leading PropTech company combining an AI-powered real estate CRM platform with a full-service marketing agency. AI lead qualification, real WhatsApp integration, personalized messaging, property video production, and targeted ad campaigns — everything agents need to close more deals."
    : "Basis HK (BasisHK) 是香港領先的地產科技公司，結合 AI 驅動的地產 CRM 平台與全方位營銷代理。AI 客源篩選、真實 WhatsApp 整合、個人化訊息、樓盤影片製作及精準廣告投放 — 助代理成交更多交易。";

  // Enhanced keywords with brand name variations and dual offering
  const defaultKeywords = language === 'en'
    ? [
        "Basis HK",
        "BasisHK",
        "Basis Hong Kong",
        "basis.hk",
        "real estate CRM Hong Kong",
        "property CRM platform",
        "AI real estate CRM",
        "WhatsApp CRM real estate",
        "AI lead qualification",
        "real estate marketing agency Hong Kong",
        "property marketing agency HK",
        "PropTech Hong Kong",
        "AI property video production",
        "real estate lead generation Hong Kong",
        "property listing management",
        "real estate digital marketing HK",
        "AI personalized messaging",
        "property video editor",
        "virtual staging Hong Kong",
        "BasisHK CRM",
        "BasisHK real estate",
        "Basis HK PropTech"
      ]
    : [
        "Basis HK",
        "BasisHK",
        "BasisHK公司",
        "Basis HK地產科技",
        "香港地產CRM",
        "地產CRM平台",
        "AI地產CRM",
        "WhatsApp CRM",
        "AI客源篩選",
        "香港地產營銷公司",
        "物業推廣服務",
        "地產科技香港",
        "AI樓盤影片製作",
        "地產客源開發",
        "樓盤管理系統",
        "地產數碼營銷",
        "AI個人化訊息",
        "樓盤影片編輯器",
        "虛擬佈置香港",
        "BasisHK CRM"
      ];

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const siteUrl = "https://basis.hk";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const finalKeywords = [...defaultKeywords, ...keywords].join(", ");

  // Enhanced Organization Schema with dual offering
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://basis.hk/#organization",
    "name": "BasisHK",
    "legalName": "Basis HK Limited",
    "alternateName": ["Basis HK", "Basis Hong Kong", "BasisHK Real Estate", "BasisHK CRM", "BASISHK"],
    "url": "https://basis.hk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://basis.hk/favicon.svg",
      "width": 512,
      "height": 512
    },
    "image": "https://basis.hk/og-image.png",
    "description": language === 'en' 
      ? "Basis HK (BasisHK) is Hong Kong's leading PropTech company offering an AI-powered real estate CRM platform and full-service marketing agency. Features include AI lead qualification, real WhatsApp integration, personalized messaging, property video production, and targeted ad campaigns."
      : "Basis HK (BasisHK) 是香港領先的地產科技公司，提供 AI 驅動的地產 CRM 平台及全方位營銷代理。功能包括 AI 客源篩選、真實 WhatsApp 整合、個人化訊息、樓盤影片製作及精準廣告投放。",
    "foundingDate": "2024",
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
      "Real Estate CRM",
      "AI Lead Qualification",
      "WhatsApp Business Integration",
      "Property Listing Management",
      "AI Personalized Messaging",
      "Property Video Production",
      "Property Video Editing",
      "Virtual Staging",
      "Real Estate Marketing",
      "PropTech",
      "Lead Generation",
      "Digital Marketing",
      "Hong Kong Real Estate",
      "Cantonese AI Voiceover"
    ]
  };

  // Enhanced LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://basis.hk/#localbusiness",
    "name": "Basis HK - BasisHK Real Estate CRM & Marketing Agency",
    "alternateName": ["BasisHK", "Basis HK", "Basis Hong Kong", "BasisHK CRM"],
    "url": "https://basis.hk",
    "image": "https://basis.hk/og-image.png",
    "description": language === 'en'
      ? "Basis HK (BasisHK) provides an AI-powered real estate CRM platform and full-service marketing agency in Hong Kong. AI lead qualification, WhatsApp integration, property video production, and targeted ad campaigns."
      : "Basis HK (BasisHK) 提供 AI 驅動的地產 CRM 平台及全方位營銷代理服務。AI 客源篩選、WhatsApp 整合、樓盤影片製作及精準廣告投放。",
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

  // SoftwareApplication Schema for the CRM Platform
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://basis.hk/#software",
    "name": "BasisHK CRM",
    "alternateName": ["BasisHK Platform", "Basis HK CRM"],
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": language === 'en'
      ? "AI-powered real estate CRM built for Hong Kong agents. Features AI lead qualification with BANT scoring, real WhatsApp integration, AI personalized messaging, property video enhancer, video editor with Cantonese AI voiceover, and bilingual support."
      : "專為香港地產代理打造的 AI 驅動 CRM。功能包括 BANT 評分 AI 客源篩選、真實 WhatsApp 整合、AI 個人化訊息、樓盤影片增強器、內建廣東話 AI 旁白的影片編輯器及雙語支援。",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "8000",
      "highPrice": "25000",
      "priceCurrency": "HKD",
      "offerCount": "3"
    },
    "featureList": [
      "AI Lead Qualification with BANT Scoring",
      "Real WhatsApp Integration",
      "AI Personalized Messaging",
      "Email Campaigns with Reply Tracking",
      "AI-Enhanced Property Listings",
      "Property Video Enhancer",
      "Property Video Editor",
      "Cantonese AI Voiceover",
      "Bilingual (English / Traditional Chinese)",
      "Gmail Auto-Sync"
    ],
    "provider": {
      "@type": "Organization",
      "name": "BasisHK",
      "@id": "https://basis.hk/#organization"
    }
  };

  // Enhanced Service Schema for the Marketing Agency
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://basis.hk/#service",
    "serviceType": language === 'en' ? "Real Estate Marketing Agency" : "地產營銷代理",
    "name": "BasisHK Marketing Agency Services",
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
      "name": language === 'en' ? "BasisHK Services & Plans" : "BasisHK 服務及方案",
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
            "name": language === 'en' ? "Predictive Ad Targeting & Lead Generation" : "精準廣告投放及客源開發"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'en' ? "Social Media Content & Management" : "社交媒體內容及管理"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'en' ? "Virtual Staging" : "虛擬佈置"
          },
          "price": "500",
          "priceCurrency": "HKD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'en' ? "Drone Video Editing" : "航拍影片剪輯"
          },
          "price": "3000",
          "priceCurrency": "HKD"
        }
      ]
    }
  };

  const combinedSchema = schema || [organizationSchema, localBusinessSchema, softwareSchema, serviceSchema];

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
      <meta property="og:image:alt" content={`Basis HK - BasisHK - ${title || 'AI Real Estate CRM & Marketing Agency'}`} />
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
      <meta name="twitter:image:alt" content={`Basis HK - BasisHK - ${title || 'AI Real Estate CRM & Marketing Agency'}`} />
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
      <meta name="DC.subject" content="Real Estate CRM, Marketing Agency, PropTech, AI, Hong Kong" />
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
