import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, BrainCircuit, Check, Film, Globe, Languages, LayoutDashboard, Mail, MessageSquare, Mic, PenTool, Search, Smartphone, Sparkles, Target, Users, Video, Zap } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Platform() {
  const { t, language } = useLanguage();

  const keywords = language === 'en'
    ? ["BasisHK CRM", "real estate CRM Hong Kong", "property management platform", "AI real estate tool", "listing management software", "lead tracking CRM", "PropTech CRM", "WhatsApp CRM"]
    : ["BasisHK CRM", "香港地產CRM", "物業管理平台", "AI地產工具", "樓盤管理軟件", "客源追蹤系統", "WhatsApp CRM"];

  return (
    <Layout>
      <SEO
        title={language === 'en' ? "BasisHK Platform | AI-Powered Real Estate CRM & Listing Management" : "BasisHK 平台 | AI 驅動地產 CRM 及樓盤管理系統"}
        description={language === 'en' ? "AI lead qualification, real WhatsApp integration, personalized messaging, property video editing, and more — the only CRM built specifically for Hong Kong real estate agents." : "AI 客源篩選、真實 WhatsApp 整合、個人化訊息、樓盤影片編輯等 — 唯一專為香港地產代理而設的 CRM。"}
        keywords={keywords}
        url="/platform"
      />

      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-bg -z-20" />
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px] -z-10" />

        <div className="container text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-widest mb-6">
            <LayoutDashboard className="w-3 h-3" />
            <span>{t('platform.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-heading font-medium mb-6 text-foreground leading-[1.1] tracking-tight px-4">
            {t('platform.hero.title')} <br />
            <span className="italic font-light text-primary">
              {t('platform.hero.subtitle')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            {t('platform.hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
              <Button size="lg" className="rounded-full px-10 h-12 text-base font-medium shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all hover:-translate-y-1 bg-primary text-white border-none">
                {t('platform.hero.cta.pricing')}
              </Button>
            </Link>
            <a href="https://calendly.com/business-basis/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="rounded-full px-10 h-12 text-base font-medium bg-white/50 backdrop-blur-sm hover:bg-white border-primary/10 text-primary">
                {t('platform.hero.cta.demo')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Headline Feature: AI Lead Qualification */}
      <section className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-4">
              <BrainCircuit className="w-3 h-3" />
              <span>{t('platform.section.ai')}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
              {t('platform.ai.title')}
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
              {t('platform.ai.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* AI Lead Qualification */}
            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
              <CardHeader className="p-8 pb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-heading font-medium">{t('platform.ai.qualify.title')}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground font-light">{t('platform.ai.qualify.desc')}</p>
                <ul className="space-y-2">
                  {['platform.ai.qualify.1', 'platform.ai.qualify.2', 'platform.ai.qualify.3'].map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* AI Personalized Messaging */}
            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
              <CardHeader className="p-8 pb-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-heading font-medium">{t('platform.ai.messaging.title')}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground font-light">{t('platform.ai.messaging.desc')}</p>
                <ul className="space-y-2">
                  {['platform.ai.messaging.1', 'platform.ai.messaging.2', 'platform.ai.messaging.3'].map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Communication Hub: WhatsApp + Email */}
      <section className="py-20 container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3 h-3" />
            <span>{t('platform.section.comms')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
            {t('platform.comms.title')}
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
            {t('platform.comms.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* WhatsApp Integration */}
          <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
            <CardHeader className="p-8 pb-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-xl font-heading font-medium">{t('platform.comms.whatsapp.title')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground font-light">{t('platform.comms.whatsapp.desc')}</p>
              <ul className="space-y-2">
                {['platform.comms.whatsapp.1', 'platform.comms.whatsapp.2', 'platform.comms.whatsapp.3'].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Email Campaigns */}
          <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
            <CardHeader className="p-8 pb-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle className="text-xl font-heading font-medium">{t('platform.comms.email.title')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground font-light">{t('platform.comms.email.desc')}</p>
              <ul className="space-y-2">
                {['platform.comms.email.1', 'platform.comms.email.2', 'platform.comms.email.3'].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Property Tools: Listings + Video */}
      <section className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-widest mb-4">
              <Film className="w-3 h-3" />
              <span>{t('platform.section.property')}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
              {t('platform.property.title')}
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
              {t('platform.property.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Property Listings with AI Enhancement */}
            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
              <CardHeader className="p-8 pb-4">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg font-heading font-medium">{t('platform.property.listings.title')}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-3">
                <ul className="space-y-2">
                  {['platform.property.listings.1', 'platform.property.listings.2', 'platform.property.listings.3'].map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Property Video Enhancer */}
            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
              <CardHeader className="p-8 pb-4">
                <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Video className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-lg font-heading font-medium">{t('platform.property.enhancer.title')}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-3">
                <ul className="space-y-2">
                  {['platform.property.enhancer.1', 'platform.property.enhancer.2', 'platform.property.enhancer.3'].map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Property Video Editor */}
            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
              <CardHeader className="p-8 pb-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <PenTool className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg font-heading font-medium">{t('platform.property.editor.title')}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-3">
                <ul className="space-y-2">
                  {['platform.property.editor.1', 'platform.property.editor.2', 'platform.property.editor.3', 'platform.property.editor.4'].map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bilingual Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
            <Languages className="w-3 h-3" />
            <span>{t('platform.section.bilingual')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-medium mb-6">
            {t('platform.bilingual.title')}
          </h2>
          <p className="text-lg text-white/70 font-light mb-12 max-w-2xl mx-auto">
            {t('platform.bilingual.desc')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('platform.bilingual.1.title'), desc: t('platform.bilingual.1.desc') },
              { title: t('platform.bilingual.2.title'), desc: t('platform.bilingual.2.desc') },
              { title: t('platform.bilingual.3.title'), desc: t('platform.bilingual.3.desc') },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl font-heading font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
            {t('platform.how.title')}
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
            {t('platform.how.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { step: "01", title: t('platform.how.1.title'), desc: t('platform.how.1.desc') },
            { step: "02", title: t('platform.how.2.title'), desc: t('platform.how.2.desc') },
            { step: "03", title: t('platform.how.3.title'), desc: t('platform.how.3.desc') },
            { step: "04", title: t('platform.how.4.title'), desc: t('platform.how.4.desc') },
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="text-5xl font-heading font-medium text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-heading font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/20 text-center">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4">
            {t('platform.cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-8 max-w-xl mx-auto">
            {t('platform.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
              <Button size="lg" className="rounded-full px-10 h-12 text-base font-medium shadow-xl shadow-primary/10">
                {t('platform.cta.button')} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/agency">
              <Button variant="outline" size="lg" className="rounded-full px-10 h-12 text-base font-medium">
                {t('platform.cta.agency')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
