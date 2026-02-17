import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Camera, Check, Film, Globe, Megaphone, MessageSquare, PenTool, Sparkles, Target, TrendingUp, Video, Zap } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Agency() {
  const { t, language } = useLanguage();

  const keywords = language === 'en'
    ? ["BasisHK agency", "real estate marketing agency Hong Kong", "property video production", "real estate advertising", "social media marketing real estate", "drone video editing", "virtual staging"]
    : ["BasisHK代理", "香港地產營銷公司", "物業影片製作", "地產廣告", "地產社交媒體營銷", "航拍影片剪輯", "虛擬佈置"];

  return (
    <Layout>
      <SEO
        title={language === 'en' ? "BasisHK Agency | Full-Service Real Estate Marketing Agency" : "BasisHK 代理 | 全方位地產營銷代理"}
        description={language === 'en' ? "From AI-powered video production to targeted ad campaigns, BasisHK's marketing agency handles everything so you can focus on closing deals." : "從 AI 影片製作到精準廣告投放，BasisHK 營銷代理為您處理一切，讓您專注成交。"}
        keywords={keywords}
        url="/agency"
      />

      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-bg -z-20" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10" />

        <div className="container text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[11px] font-bold uppercase tracking-widest mb-6">
            <Megaphone className="w-3 h-3" />
            <span>{t('agency.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-heading font-medium mb-6 text-foreground leading-[1.1] tracking-tight px-4">
            {t('agency.hero.title')} <br />
            <span className="italic font-light text-primary">
              {t('agency.hero.subtitle')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            {t('agency.hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
              <Button size="lg" className="rounded-full px-10 h-12 text-base font-medium shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all hover:-translate-y-1 bg-primary text-white border-none">
                {t('agency.hero.cta.services')}
              </Button>
            </Link>
            <a href="https://calendly.com/business-basis/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="rounded-full px-10 h-12 text-base font-medium bg-white/50 backdrop-blur-sm hover:bg-white border-primary/10 text-primary">
                {t('agency.hero.cta.consult')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
              {t('agency.services.title')}
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
              {t('agency.services.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Video, title: t('agency.svc.video.title'), desc: t('agency.svc.video.desc'), color: "text-purple-600", bg: "bg-purple-50" },
              { icon: Target, title: t('agency.svc.ads.title'), desc: t('agency.svc.ads.desc'), color: "text-indigo-600", bg: "bg-indigo-50" },
              { icon: PenTool, title: t('agency.svc.content.title'), desc: t('agency.svc.content.desc'), color: "text-pink-600", bg: "bg-pink-50" },
              { icon: Camera, title: t('agency.svc.drone.title'), desc: t('agency.svc.drone.desc'), color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Sparkles, title: t('agency.svc.staging.title'), desc: t('agency.svc.staging.desc'), color: "text-green-600", bg: "bg-green-50" },
              { icon: Globe, title: t('agency.svc.social.title'), desc: t('agency.svc.social.desc'), color: "text-orange-600", bg: "bg-orange-50" },
            ].map((svc, i) => (
              <Card key={i} className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
                <CardHeader className="p-8 pb-4">
                  <div className={`w-12 h-12 ${svc.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <svc.icon className={`w-6 h-6 ${svc.color}`} />
                  </div>
                  <CardTitle className="text-xl font-heading font-medium">{svc.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground font-light">
                    {svc.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
            {t('agency.addons.title')}
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
            {t('agency.addons.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: t('agency.addon.videopack.title'), price: "HK$2,500", desc: t('agency.addon.videopack.desc') },
            { title: t('agency.addon.imagepack.title'), price: "HK$800", desc: t('agency.addon.imagepack.desc') },
            { title: t('agency.addon.voiceover.title'), price: "HK$1,500", desc: t('agency.addon.voiceover.desc') },
            { title: t('agency.addon.staging.title'), price: "HK$500", desc: t('agency.addon.staging.desc') },
            { title: t('agency.addon.drone.title'), price: "HK$3,000", desc: t('agency.addon.drone.desc') },
            { title: t('agency.addon.social.title'), price: "HK$2,000", desc: t('agency.addon.social.desc') },
            { title: t('agency.addon.portal.title'), price: "HK$5,000", desc: t('agency.addon.portal.desc') },
            { title: t('agency.addon.rush.title'), price: "HK$800", desc: t('agency.addon.rush.desc') },
          ].map((addon, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border/50 bg-white/60 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="text-2xl font-heading font-medium text-primary mb-2">{addon.price}</div>
              <h3 className="text-base font-heading font-medium mb-2">{addon.title}</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">{addon.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-medium mb-6">
            {t('agency.results.title')}
          </h2>
          <p className="text-lg text-white/70 font-light mb-12 max-w-2xl mx-auto">
            {t('agency.results.desc')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "+312%", label: t('agency.results.roi') },
              { stat: "48hrs", label: t('agency.results.delivery') },
              { stat: "$12", label: t('agency.results.cpl') },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-medium italic mb-2">{item.stat}</div>
                <p className="text-sm text-white/60 font-light">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4">
          {t('agency.cta.title')}
        </h2>
        <p className="text-lg text-muted-foreground font-light mb-8 max-w-xl mx-auto">
          {t('agency.cta.desc')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://calendly.com/business-basis/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-10 h-12 text-base font-medium shadow-xl shadow-primary/10">
              {t('agency.cta.button')} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <Link href="/platform">
            <Button variant="outline" size="lg" className="rounded-full px-10 h-12 text-base font-medium">
              {t('agency.cta.platform')}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
