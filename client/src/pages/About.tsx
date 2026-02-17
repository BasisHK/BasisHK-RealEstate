import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { Users, HeartHandshake, Lightbulb, Award, ChevronDown, ChevronUp, Brain, MessageSquare, Video, Target, BarChart3, Palette, ArrowRight, Database, Zap } from "lucide-react";
import { useState } from "react";

export default function About() {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // FAQ data for AEO optimization
  const faqs = language === 'en' ? [
    {
      question: "What is BasisHK?",
      answer: "BasisHK (also known as Basis HK or Basis Hong Kong) is Hong Kong's leading PropTech company that combines an AI-powered real estate CRM platform with a full-service marketing agency. Founded in 2024, BasisHK helps agents close more deals through AI lead qualification, real WhatsApp integration, personalized messaging, property video production, and targeted ad campaigns. The company is headquartered in Hong Kong."
    },
    {
      question: "What services does Basis HK offer?",
      answer: "Basis HK offers two core products: (1) An AI-powered CRM Platform featuring AI lead qualification with BANT scoring, real WhatsApp integration, AI personalized messaging, email campaigns with reply tracking, AI-enhanced property listings with virtual staging, a property video enhancer, a full video editor with Cantonese AI voiceover, and bilingual support. (2) A Full-Service Marketing Agency providing AI video production, targeted ad campaigns, social media content, drone video editing, and virtual staging services. Plans start from HK$8,000/month."
    },
    {
      question: "How much does BasisHK cost?",
      answer: "BasisHK offers three main plans: The Starter Plan at HK$8,000/month includes the CRM platform with AI lead qualification, WhatsApp integration, and 10 AI property videos. The Growth Plan at HK$15,000/month adds advanced features, 25 videos, and a branded property portal. The Agency Plan at HK$25,000/month includes everything plus dedicated account management, unlimited videos, and priority support. Add-on services like virtual staging, drone video editing, and social media content packs are also available."
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
      answer: "BasisHK（又稱 Basis HK 或 Basis Hong Kong）是香港領先的地產科技公司，結合 AI 驅動的地產 CRM 平台與全方位營銷代理。成立於2024年，BasisHK 以 AI 客源篩選、真實 WhatsApp 整合、個人化訊息、樓盤影片製作及精準廣告投放助代理成交更多。公司總部位於香港。"
    },
    {
      question: "Basis HK 提供什麼服務？",
      answer: "Basis HK 提供兩大核心產品：(1) AI 驅動的 CRM 平台，功能包括 BANT 評分 AI 客源篩選、真實 WhatsApp 整合、AI 個人化訊息、電郵活動及回覆追蹤、AI 增強樓盤與虛擬佈置、樓盤影片增強器、內建廣東話 AI 旁白的影片編輯器及雙語支援。(2) 全方位營銷代理，提供 AI 影片製作、精準廣告投放、社交媒體內容、航拍影片剪輯及虛擬佈置服務。方案從每月 HK$8,000 起。"
    },
    {
      question: "BasisHK 收費多少？",
      answer: "BasisHK 提供三個主要方案：入門方案每月 HK$8,000，包括 CRM 平台、AI 客源篩選、WhatsApp 整合和10個 AI 樓盤影片。增長方案每月 HK$15,000，增加進階功能、25個影片和品牌樓盤門戶。代理方案每月 HK$25,000，包括一切功能加專屬客戶經理、無限影片和優先支援。另提供虛擬佈置、航拍影片剪輯等附加服務。"
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
      ? "Learn about Basis HK (BasisHK), Hong Kong's leading PropTech company combining an AI real estate CRM platform with a full-service marketing agency."
      : "了解 Basis HK (BasisHK)，香港領先的地產科技公司，結合 AI 地產 CRM 平台與全方位營銷代理。",
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
        title={language === 'en' ? "About Basis HK | BasisHK - AI Real Estate CRM & Marketing Agency" : "關於 Basis HK | BasisHK - AI 地產 CRM 及營銷代理"}
        description={language === 'en' 
          ? "Learn about Basis HK (BasisHK), Hong Kong's leading PropTech company combining an AI-powered real estate CRM platform with a full-service marketing agency. AI lead qualification, WhatsApp integration, property video production, and targeted ad campaigns."
          : "了解 Basis HK (BasisHK)，香港領先的地產科技公司，結合 AI 地產 CRM 平台與全方位營銷代理。AI 客源篩選、WhatsApp 整合、樓盤影片製作及精準廣告投放。"
        }
        url="/about"
        schema={[aboutPageSchema, faqSchema]}
      />
      <div className="bg-background min-h-screen">
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 mesh-bg opacity-50 -z-20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] -z-10" />
          
          <div className="container text-center max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-sm text-primary text-[11px] font-bold uppercase tracking-widest mb-6">
              <Users className="w-3 h-3" />
              <span>{t('about.stat.focus')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-medium mb-8 text-foreground leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              {t('about.desc')}
            </p>
          </div>
        </section>

        {/* Origin Story */}
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
                  <span className="text-foreground font-medium">Basis HK (BasisHK)</span> {t('about.mission.1')}
                </p>
                <p className="pl-4 border-l-2 border-accent">
                  {t('about.mission.2')}
                </p>
                <p>
                  {t('about.mission.3')}
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

        {/* Two Pillars Section */}
        <section className="py-24 bg-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
          <div className="container relative z-10 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-sm text-primary text-[11px] font-bold uppercase tracking-widest mb-6">
                <Zap className="w-3 h-3" />
                <span>{language === 'en' ? 'Two Products, One Mission' : '兩大產品，一個使命'}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4">
                {language === 'en' ? 'CRM Platform + Marketing Agency' : 'CRM 平台 + 營銷代理'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'The only company in Hong Kong that gives agents both the technology and the team to dominate their market.'
                  : '香港唯一一家同時為代理提供技術工具和專業團隊的公司，助您制霸市場。'
                }
              </p>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* CRM Platform Pillar */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-medium text-foreground mb-4">
                  {language === 'en' ? 'AI-Powered CRM Platform' : 'AI 驅動 CRM 平台'}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  {language === 'en'
                    ? 'A purpose-built CRM for real estate agents. Not a generic tool with a property skin — every feature was designed from the ground up for how agents actually work in Hong Kong.'
                    : '專為地產代理打造的 CRM。不是套上地產外殼的通用工具 — 每個功能都是從零開始，按照香港代理的實際工作方式設計。'
                  }
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { icon: Brain, text: language === 'en' ? 'AI Lead Qualification with BANT Scoring' : 'BANT 評分 AI 客源篩選' },
                    { icon: MessageSquare, text: language === 'en' ? 'Real WhatsApp Integration' : '真實 WhatsApp 整合' },
                    { icon: Zap, text: language === 'en' ? 'AI Personalized Messaging' : 'AI 個人化訊息' },
                    { icon: Video, text: language === 'en' ? 'Property Video Editor & Enhancer' : '樓盤影片編輯器及增強器' },
                    { icon: Palette, text: language === 'en' ? 'AI Virtual Staging & Enhancement' : 'AI 虛擬佈置及增強' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <Link href="/platform">
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all cursor-pointer">
                    {language === 'en' ? 'Explore the Platform' : '探索平台'} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>

              {/* Marketing Agency Pillar */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-medium text-foreground mb-4">
                  {language === 'en' ? 'Full-Service Marketing Agency' : '全方位營銷代理'}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  {language === 'en'
                    ? 'A dedicated marketing team that works as an extension of your business. We handle the creative, the campaigns, and the content — you focus on closing deals.'
                    : '一支專屬營銷團隊，作為您業務的延伸。我們負責創意、廣告和內容 — 您專注成交。'
                  }
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { icon: Video, text: language === 'en' ? 'AI Property Video Production' : 'AI 樓盤影片製作' },
                    { icon: Target, text: language === 'en' ? 'Targeted Ad Campaigns (Meta & Google)' : '精準廣告投放 (Meta 及 Google)' },
                    { icon: Palette, text: language === 'en' ? 'Social Media Content Creation' : '社交媒體內容創作' },
                    { icon: BarChart3, text: language === 'en' ? 'Performance Analytics & Reporting' : '成效分析及報告' },
                    { icon: Lightbulb, text: language === 'en' ? 'Drone Video Editing & Virtual Staging' : '航拍影片剪輯及虛擬佈置' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <Link href="/agency">
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all cursor-pointer">
                    {language === 'en' ? 'Explore the Agency' : '探索代理服務'} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 container">
          <div className="max-w-6xl mx-auto">
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
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
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
        <section className="py-24 bg-secondary/20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4">
                  {language === 'en' ? 'Frequently Asked Questions' : '常見問題'}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {language === 'en' 
                    ? 'Learn more about BasisHK\'s CRM platform and marketing agency services'
                    : '了解更多關於 BasisHK 的 CRM 平台及營銷代理服務'
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
          </div>
        </section>

        {/* Slogan */}
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
                  ? 'Whether you need a smarter CRM, a dedicated marketing team, or both — we\'ve got you covered.'
                  : '無論您需要更智能的 CRM、專屬營銷團隊，還是兩者兼備 — 我們都能為您提供。'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/business-basis/30min" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-12 h-14 text-lg font-medium bg-white text-primary hover:bg-accent hover:text-primary-foreground transition-all shadow-lg hover:scale-105">
                    {t('about.cta.button')}
                  </Button>
                </a>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="rounded-full px-12 h-14 text-lg font-medium border-white/30 text-white hover:bg-white/10 transition-all">
                    {language === 'en' ? 'View Plans' : '查看方案'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
