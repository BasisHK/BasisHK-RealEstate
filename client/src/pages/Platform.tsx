import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, BrainCircuit, Check, Database, Globe, LayoutDashboard, MessageSquare, RefreshCw, Search, Smartphone, Sparkles, Users, Zap } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Platform() {
  const { t, language } = useLanguage();

  const keywords = language === 'en'
    ? ["BasisHK CRM", "real estate CRM Hong Kong", "property management platform", "AI real estate tool", "listing management software", "lead tracking CRM", "PropTech CRM"]
    : ["BasisHK CRM", "香港地產CRM", "物業管理平台", "AI地產工具", "樓盤管理軟件", "客源追蹤系統"];

  return (
    <Layout>
      <SEO
        title={language === 'en' ? "BasisHK Platform | AI-Powered Real Estate CRM & Listing Management" : "BasisHK 平台 | AI 驅動地產 CRM 及樓盤管理系統"}
        description={language === 'en' ? "Manage listings, track leads, and automate your workflow with BasisHK's intelligent CRM platform built for Hong Kong real estate agents." : "透過 BasisHK 智能 CRM 平台管理樓盤、追蹤客源、自動化工作流程，專為香港地產代理而設。"}
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

      {/* Core Features Grid */}
      <section className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
              {t('platform.features.title')}
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
              {t('platform.features.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Database, title: t('platform.feat.listings.title'), desc: t('platform.feat.listings.desc'), color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Users, title: t('platform.feat.leads.title'), desc: t('platform.feat.leads.desc'), color: "text-indigo-600", bg: "bg-indigo-50" },
              { icon: Bot, title: t('platform.feat.chatbot.title'), desc: t('platform.feat.chatbot.desc'), color: "text-purple-600", bg: "bg-purple-50" },
              { icon: RefreshCw, title: t('platform.feat.sync.title'), desc: t('platform.feat.sync.desc'), color: "text-green-600", bg: "bg-green-50" },
              { icon: LayoutDashboard, title: t('platform.feat.dashboard.title'), desc: t('platform.feat.dashboard.desc'), color: "text-orange-600", bg: "bg-orange-50" },
              { icon: Smartphone, title: t('platform.feat.mobile.title'), desc: t('platform.feat.mobile.desc'), color: "text-pink-600", bg: "bg-pink-50" },
            ].map((feature, i) => (
              <Card key={i} className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
                <CardHeader className="p-8 pb-4">
                  <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-heading font-medium">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground font-light">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How the CRM Works */}
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

      {/* Why Our CRM */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-medium mb-6">
            {t('platform.why.title')}
          </h2>
          <p className="text-lg text-white/70 font-light mb-12 max-w-2xl mx-auto">
            {t('platform.why.desc')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('platform.why.1.title'), desc: t('platform.why.1.desc') },
              { title: t('platform.why.2.title'), desc: t('platform.why.2.desc') },
              { title: t('platform.why.3.title'), desc: t('platform.why.3.desc') },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl font-heading font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container text-center">
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
      </section>
    </Layout>
  );
}
