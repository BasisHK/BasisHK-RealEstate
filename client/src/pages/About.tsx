import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { Building2, Users, LineChart, Award, HeartHandshake, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function About() {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // FAQ data for AEO optimization
  const faqs = language === 'en' ? [
    {
      question: "What is BasisHK?",
      answer: "BasisHK (also known as Basis HK or Basis Hong Kong) is Hong Kong's leading PropTech company specializing in AI-powered real estate marketing. Founded in 2024, BasisHK helps real estate agents create professional property videos, generate leads, and market listings using artificial intelligence technology. The company is headquartered in Hong Kong and serves agents across Asia."
    },
    {
      question: "What services does Basis HK offer?",
      answer: "Basis HK offers comprehensive AI-powered real estate marketing services including: AI Property Video Generation (creating cinematic property videos from photos), Lead Generation & Capture (automated chatbots and lead nurturing), Digital Marketing (social media and online advertising campaigns), and Agent Portals (personalized websites for property listings). Plans start from HK$8,000/month for 10 videos."
    },
    {
      question: "How much does BasisHK cost?",
      answer: "BasisHK offers two main pricing plans: The Starter Plan at HK$8,000/month includes 10 AI property videos, a basic agent portal, and lead capture bot. The Growth Plan at HK$15,000/month includes 25 AI property videos, unlimited listings, and advanced lead capture features. Custom Enterprise plans are also available for agencies."
    },
    {
      question: "Who founded BasisHK?",
      answer: "BasisHK was founded in 2024 by a team of four co-founders: Michael Pang (CEO & Founder), Fabio Guaglione (COO & Co-Founder), Danish Agnihotri (CCO & Co-Founder), and Carol Chan (CBDO & Co-Founder). The team combines expertise in technology, real estate, and business development."
    },
    {
      question: "How does BasisHK's AI video generation work?",
      answer: "BasisHK uses advanced generative AI technology to create professional property videos from static photos. Agents simply upload property photos and floor plans, and BasisHK's AI generates cinematic video tours with smooth camera movements, professional voiceovers, background music, and lifestyle imagery. Videos are typically delivered within 48 hours."
    },
    {
      question: "Where is Basis HK located?",
      answer: "Basis HK (BasisHK) is headquartered in Hong Kong. The company primarily serves real estate agents and agencies in Hong Kong, with plans to expand across Asia. You can contact BasisHK at business@basis.hk or book a consultation at https://calendly.com/business-basis/30min."
    }
  ] : [
    {
      question: "什麼是 BasisHK？",
      answer: "BasisHK（又稱 Basis HK 或 Basis Hong Kong）是香港領先的地產科技公司，專注於 AI 驅動的房地產營銷。BasisHK 成立於2024年，幫助地產代理使用人工智能技術創建專業的樓盤影片、開發客源和推廣物業。公司總部位於香港，服務亞洲各地的代理。"
    },
    {
      question: "Basis HK 提供什麼服務？",
      answer: "Basis HK 提供全面的 AI 驅動房地產營銷服務，包括：AI 樓盤影片製作（從照片創建電影級樓盤影片）、客源開發與捕獲（自動化聊天機器人和客戶培育）、數碼營銷（社交媒體和網絡廣告活動），以及代理門戶網站（個性化的物業列表網站）。方案從每月 HK$8,000 起，包含10個影片。"
    },
    {
      question: "BasisHK 收費多少？",
      answer: "BasisHK 提供兩個主要定價方案：入門方案每月 HK$8,000，包括10個 AI 樓盤影片、基本代理門戶和客源捕獲機器人。增長方案每月 HK$15,000，包括25個 AI 樓盤影片、無限物業列表和進階客源捕獲功能。也提供企業定制方案。"
    },
    {
      question: "誰創立了 BasisHK？",
      answer: "BasisHK 由四位聯合創始人於2024年創立：Michael Pang（CEO 兼創始人）、Fabio Guaglione（COO 兼聯合創始人）、Danish Agnihotri（CCO 兼聯合創始人）和 Carol Chan（CBDO 兼聯合創始人）。團隊結合了技術、房地產和業務發展方面的專業知識。"
    },
    {
      question: "BasisHK 的 AI 影片生成如何運作？",
      answer: "BasisHK 使用先進的生成式 AI 技術從靜態照片創建專業樓盤影片。代理只需上傳物業照片和平面圖，BasisHK 的 AI 就會生成電影級的影片導覽，包括流暢的鏡頭移動、專業配音、背景音樂和生活方式影像。影片通常在48小時內交付。"
    },
    {
      question: "Basis HK 位於哪裡？",
      answer: "Basis HK（BasisHK）總部位於香港。公司主要服務香港的地產代理和代理公司，並計劃擴展至亞洲其他地區。您可以通過 business@basis.hk 聯繫 BasisHK，或在 https://calendly.com/business-basis/30min 預約諮詢。"
    }
  ];

  // FAQ Schema for structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // About Page Schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": language === 'en' ? "About Basis HK - BasisHK Company Information" : "關於 Basis HK - BasisHK 公司資訊",
    "description": language === 'en' 
      ? "Learn about Basis HK (BasisHK), Hong Kong's leading PropTech company. Discover our mission, team, and AI-powered real estate marketing solutions."
      : "了解 Basis HK (BasisHK)，香港領先的地產科技公司。探索我們的使命、團隊和 AI 驅動的房地產營銷解決方案。",
    "url": "https://basis.hk/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "BasisHK",
      "alternateName": ["Basis HK", "Basis Hong Kong"]
    }
  };

  return (
    <Layout>
      <SEO 
        title={language === 'en' ? "About Basis HK | BasisHK Company & Team" : "關於 Basis HK | BasisHK 公司與團隊"}
        description={language === 'en' 
          ? "Learn about Basis HK (BasisHK), Hong Kong's leading PropTech company. Founded in 2024, we provide AI-powered real estate marketing solutions for agents across Asia."
          : "了解 Basis HK (BasisHK)，香港領先的地產科技公司。成立於2024年，我們為亞洲各地的代理提供 AI 驅動的房地產營銷解決方案。"
        }
        url="/about"
        schema={[aboutPageSchema, faqSchema]}
      />
      <div className="bg-background min-h-screen">
        {/* Hero - Creative Professional */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 mesh-bg opacity-50 -z-20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] -z-10" />
          
          <div className="container text-center max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-sm text-primary text-[11px] font-bold uppercase tracking-widest mb-6">
              <Users className="w-3 h-3" />
              <span>{t('about.stat.focus')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-medium mb-8 text-foreground leading-tight">
              {language === 'en' ? 'About Basis HK' : '關於 Basis HK'}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              {language === 'en' 
                ? "BasisHK is Hong Kong's leading PropTech company transforming real estate marketing with AI technology."
                : "BasisHK 是香港領先的地產科技公司，以 AI 技術革新房地產營銷。"
              }
            </p>
          </div>
        </section>

        {/* Origin Story - Editorial Layout */}
        <section className="container py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-2xl -z-10" />
              <img 
                src="/images/hero-city-night.jpg" 
                alt="Hong Kong Skyline - BasisHK Headquarters" 
                className="rounded-[2rem] shadow-2xl border border-white/50 w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-border/50 hidden md:block">
                <div className="text-4xl font-heading font-medium text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                  {language === 'en' ? 'Founded in Hong Kong' : '成立於香港'}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
                {language === 'en' ? 'The BasisHK Story' : 'BasisHK 的故事'}<br />
                <span className="text-primary italic">
                  {language === 'en' ? 'From Vision to Reality' : '從願景到現實'}
                </span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  <span className="text-foreground font-medium">Basis HK (BasisHK)</span> {language === 'en' 
                    ? "was founded in 2024 with a clear mission: to transform how properties are marketed in Asia using artificial intelligence."
                    : "成立於2024年，使命明確：利用人工智能改變亞洲物業營銷方式。"
                  }
                </p>
                <p className="pl-4 border-l-2 border-accent">
                  {language === 'en'
                    ? "Our founders saw that while Western markets had embraced PropTech, Asia's real estate industry was still relying on outdated methods. BasisHK was created to bridge this gap."
                    : "我們的創始人發現，雖然西方市場已經接受了地產科技，但亞洲的房地產行業仍然依賴過時的方法。BasisHK 的創立正是為了填補這一空白。"
                  }
                </p>
                <p>
                  {language === 'en'
                    ? "Today, BasisHK serves real estate agents across Hong Kong, helping them create stunning AI-powered property videos and generate more leads than ever before."
                    : "如今，BasisHK 服務香港各地的地產代理，幫助他們創建令人驚嘆的 AI 樓盤影片，並獲得前所未有的客源。"
                  }
                </p>
              </div>
              
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-heading font-medium text-foreground mb-1">100%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{t('about.stat.focus')}</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-medium text-foreground mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{t('about.stat.uptime')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Grid */}
        <section className="py-24 bg-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
          <div className="container relative z-10 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4">{t('about.values.title')}</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: HeartHandshake,
                  title: t('about.values.integrity'), 
                  desc: t('about.values.integrity.desc') 
                },
                { 
                  icon: Lightbulb,
                  title: t('about.values.innovation'), 
                  desc: t('about.values.innovation.desc') 
                },
                { 
                  icon: Award,
                  title: t('about.values.results'), 
                  desc: t('about.values.results.desc') 
                }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-medium text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section for AEO */}
        <section className="py-24 container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4">
                {language === 'en' ? 'Frequently Asked Questions' : '常見問題'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'en' 
                  ? 'Learn more about Basis HK and our AI-powered real estate marketing services'
                  : '了解更多關於 Basis HK 和我們的 AI 房地產營銷服務'
                }
              </p>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
                  >
                    <h3 className="text-lg font-medium text-foreground pr-4">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slogan - In Content We Trust */}
        <section className="py-20 container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-[2rem] blur-xl -z-10" />
              <div className="bg-white/60 backdrop-blur-sm border border-white/60 rounded-[2rem] p-12 md:p-16 shadow-lg">
                <h2 className="text-4xl md:text-6xl font-heading font-medium text-foreground mb-6 tracking-tight">
                  {t('about.slogan.title')}
                </h2>
                <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                  {t('about.slogan.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 container">
          <div className="bg-primary rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-medium mb-8 text-white">
                {language === 'en' ? 'Ready to Work with BasisHK?' : '準備好與 BasisHK 合作？'}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                {language === 'en' 
                  ? 'Join the real estate agents who are already transforming their marketing with Basis HK.'
                  : '加入已經通過 Basis HK 改變營銷方式的地產代理行列。'
                }
              </p>
              <a href="https://calendly.com/business-basis/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-12 h-14 text-lg font-medium bg-white text-primary hover:bg-accent hover:text-primary-foreground transition-all shadow-lg hover:scale-105">
                  {t('about.cta.button')}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
