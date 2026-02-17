import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, BarChart3, BookOpen, Briefcase, Building2, Camera, Check, Film, Globe, Image, Layers, LayoutGrid, Mail, MapPin, Megaphone, MessageSquare, Mic, Monitor, Palette, PenTool, Printer, Search, Share2, Smartphone, Sparkles, Star, Target, TrendingUp, Users, Video, Zap } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

export default function Agency() {
  const { t, language } = useLanguage();

  const keywords = language === 'en'
    ? ["BasisHK agency", "real estate marketing agency Hong Kong", "property video production", "real estate advertising", "social media marketing real estate", "drone video editing", "virtual staging", "estate agent branding", "real estate SEO"]
    : ["BasisHK代理", "香港地產營銷公司", "物業影片製作", "地產廣告", "地產社交媒體營銷", "航拍影片剪輯", "虛擬佈置", "地產代理品牌", "地產SEO"];

  // Core services - the main 6 offerings
  const coreServices = [
    { icon: Video, title: language === 'en' ? 'AI Property Video Production' : 'AI 樓盤影片製作', desc: language === 'en' ? 'Cinematic property videos generated from photos using AI. Smooth camera movements, professional voiceovers, background music, and lifestyle imagery — delivered in 48 hours.' : '利用 AI 從照片生成電影級樓盤影片。流暢鏡頭、專業配音、背景音樂及生活方式影像 — 48小時內交付。', color: "text-purple-600", bg: "bg-purple-50" },
    { icon: Target, title: language === 'en' ? 'Targeted Ad Campaigns' : '精準廣告投放', desc: language === 'en' ? 'Data-driven campaigns on Meta (Facebook & Instagram) and Google Ads. Hyper-targeted to reach qualified buyers by location, income, and property interest.' : 'Meta（Facebook 及 Instagram）和 Google Ads 數據驅動廣告。按地區、收入及物業興趣精準定位合資格買家。', color: "text-indigo-600", bg: "bg-indigo-50" },
    { icon: PenTool, title: language === 'en' ? 'Content Creation & Copywriting' : '內容創作及文案撰寫', desc: language === 'en' ? 'Property descriptions, blog articles, social media captions, and marketing copy — all optimized for the Hong Kong market in English and Chinese.' : '樓盤描述、博客文章、社交媒體文案及營銷文案 — 全部針對香港市場優化，提供中英雙語。', color: "text-pink-600", bg: "bg-pink-50" },
    { icon: Camera, title: language === 'en' ? 'Drone Video & Photography' : '航拍影片及攝影', desc: language === 'en' ? 'Aerial footage and photography that showcases properties, neighborhoods, and surrounding amenities from stunning perspectives.' : '航拍影片及攝影，從令人驚嘆的角度展示物業、社區及周邊設施。', color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Sparkles, title: language === 'en' ? 'AI Virtual Staging' : 'AI 虛擬佈置', desc: language === 'en' ? 'Transform empty rooms into beautifully furnished spaces using AI. Renovation previews, decluttering, and style transformations — no physical staging needed.' : '利用 AI 將空置房間轉變為精美佈置空間。裝修預覽、去雜物及風格轉換 — 無需實體佈置。', color: "text-green-600", bg: "bg-green-50" },
    { icon: Globe, title: language === 'en' ? 'Social Media Management' : '社交媒體管理', desc: language === 'en' ? 'Full management of your Instagram, Facebook, LinkedIn, and TikTok. Content calendars, posting schedules, engagement, and community building.' : '全面管理您的 Instagram、Facebook、LinkedIn 及 TikTok。內容日曆、發布排程、互動及社群建設。', color: "text-orange-600", bg: "bg-orange-50" },
  ];

  // Extended marketing services
  const extendedServices = [
    { icon: Palette, title: language === 'en' ? 'Estate Agent Branding' : '地產代理品牌建設', desc: language === 'en' ? 'Complete brand identity design — logo, color palette, typography, business cards, email signatures, and brand guidelines that make you stand out in a crowded market.' : '完整品牌形象設計 — 標誌、配色、字體、名片、電郵簽名及品牌指南，助您在競爭激烈的市場中脫穎而出。' },
    { icon: Monitor, title: language === 'en' ? 'Agent Website Design' : '代理網站設計', desc: language === 'en' ? 'Custom-built property websites and landing pages with your branding, IDX integration, lead capture forms, and mobile-first responsive design.' : '自訂品牌物業網站及著陸頁，整合 IDX、客源捕獲表單及手機優先響應式設計。' },
    { icon: Search, title: language === 'en' ? 'Real Estate SEO' : '地產 SEO 優化', desc: language === 'en' ? 'Dominate local search results. On-page optimization, Google Business Profile management, local citations, and content strategy to rank for property searches in your area.' : '稱霸本地搜索結果。頁面優化、Google 商業檔案管理、本地引用及內容策略，讓您在區域物業搜索中名列前茅。' },
    { icon: Mail, title: language === 'en' ? 'Email Marketing Campaigns' : '電郵營銷活動', desc: language === 'en' ? 'Automated drip campaigns, property newsletters, market updates, and buyer nurturing sequences. Professionally designed templates with open rate optimization.' : '自動化電郵推廣、樓盤通訊、市場動態及買家培育序列。專業設計模板，優化開啟率。' },
    { icon: Users, title: language === 'en' ? 'Lead Generation & Nurturing' : '客源開發及培育', desc: language === 'en' ? 'Multi-channel lead generation through paid ads, organic content, landing pages, and referral programs. Full-funnel nurturing from first touch to closing.' : '透過付費廣告、有機內容、著陸頁及推薦計劃進行多渠道客源開發。從首次接觸到成交的全漏斗培育。' },
    { icon: Smartphone, title: language === 'en' ? 'Short-Form Video (Reels & TikTok)' : '短影片製作 (Reels 及 TikTok)', desc: language === 'en' ? 'Vertical video content optimized for Instagram Reels, TikTok, and YouTube Shorts. Property tours, market tips, and agent personality content that drives engagement.' : '為 Instagram Reels、TikTok 及 YouTube Shorts 優化的垂直短影片。樓盤導覽、市場貼士及代理個人風格內容。' },
    { icon: Printer, title: language === 'en' ? 'Print & Collateral Design' : '印刷品及宣傳品設計', desc: language === 'en' ? 'Property brochures, flyers, window cards, pull-up banners, and presentation folders. Professional print-ready designs that match your digital brand.' : '樓盤小冊子、傳單、櫥窗卡、易拉架及簡報文件夾。與您的數碼品牌一致的專業印刷設計。' },
    { icon: MapPin, title: language === 'en' ? 'Open House Marketing' : '開放日營銷', desc: language === 'en' ? 'End-to-end open house promotion — event landing pages, social media countdowns, targeted ads to nearby buyers, signage design, and post-event follow-up campaigns.' : '端到端開放日推廣 — 活動著陸頁、社交媒體倒數、附近買家精準廣告、標誌設計及活動後跟進。' },
    { icon: BarChart3, title: language === 'en' ? 'Market Reports & Data Content' : '市場報告及數據內容', desc: language === 'en' ? 'Branded market reports, area guides, and data-driven content that positions you as the local expert. Monthly or quarterly reports with your branding.' : '品牌市場報告、區域指南及數據驅動內容，助您建立本地專家形象。每月或每季度品牌報告。' },
    { icon: Star, title: language === 'en' ? 'Reputation & Review Management' : '聲譽及評價管理', desc: language === 'en' ? 'Google review generation strategies, testimonial collection, case study creation, and online reputation monitoring to build trust with potential clients.' : 'Google 評價生成策略、客戶見證收集、案例研究及線上聲譽監控，建立潛在客戶信任。' },
    { icon: Share2, title: language === 'en' ? 'Referral & Partnership Programs' : '推薦及合作計劃', desc: language === 'en' ? 'Design and launch referral programs, co-marketing partnerships with mortgage brokers, interior designers, and relocation services to expand your network.' : '設計及推出推薦計劃，與按揭經紀、室內設計師及搬遷服務建立聯合營銷合作，擴展您的人脈。' },
    { icon: Briefcase, title: language === 'en' ? 'Listing Presentation Design' : '樓盤簡報設計', desc: language === 'en' ? 'Stunning pitch decks and listing presentations that win mandates. Data-rich, beautifully designed slides that showcase your marketing plan and track record.' : '精美的推介簡報及樓盤展示，助您贏得委託。數據豐富、設計精美的幻燈片，展示您的營銷計劃及往績。' },
  ];

  // À la carte add-ons
  const addons = [
    { title: language === 'en' ? 'Extra Video Pack' : '額外影片套裝', desc: language === 'en' ? '10 additional AI property videos' : '10個額外 AI 樓盤影片', icon: Film },
    { title: language === 'en' ? 'Extra Image Pack' : '額外圖片套裝', desc: language === 'en' ? '50 AI-enhanced property images' : '50張 AI 增強樓盤圖片', icon: Image },
    { title: language === 'en' ? 'Premium Cantonese Voiceover' : '優質廣東話配音', desc: language === 'en' ? 'Native Cantonese AI voiceover for videos' : '母語級廣東話 AI 影片配音', icon: Mic },
    { title: language === 'en' ? 'Virtual Staging (per room)' : '虛擬佈置（每房間）', desc: language === 'en' ? 'AI-furnished room transformation' : 'AI 傢俱房間改造', icon: Sparkles },
    { title: language === 'en' ? 'Drone Video Editing' : '航拍影片剪輯', desc: language === 'en' ? 'Raw footage to cinematic masterpiece' : '原始素材剪輯為電影級作品', icon: Video },
    { title: language === 'en' ? 'Social Media Content Pack' : '社交媒體內容套裝', desc: language === 'en' ? 'Monthly content calendar with posts' : '每月內容日曆及貼文', icon: Globe },
    { title: language === 'en' ? 'Branded Portal Setup' : '品牌門戶建設', desc: language === 'en' ? 'Custom property portal with your brand' : '自訂品牌樓盤門戶', icon: Zap },
    { title: language === 'en' ? 'Priority Rendering (Rush)' : '優先渲染（加急）', desc: language === 'en' ? '24-hour turnaround on any deliverable' : '任何交付物24小時加急', icon: TrendingUp },
  ];

  return (
    <Layout>
      <SEO
        title={language === 'en' ? "BasisHK Agency | Full-Service Real Estate Marketing Agency" : "BasisHK 代理 | 全方位地產營銷代理"}
        description={language === 'en' ? "From estate agent branding and AI video production to targeted ad campaigns and open house marketing — BasisHK's agency handles everything so you can focus on closing deals." : "從地產代理品牌建設、AI 影片製作到精準廣告投放及開放日營銷 — BasisHK 營銷代理為您處理一切，讓您專注成交。"}
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
            <span>{language === 'en' ? 'Full-Service Marketing Agency' : '全方位營銷代理'}</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-heading font-medium mb-6 text-foreground leading-[1.1] tracking-tight px-4">
            {language === 'en' ? 'Your Marketing Team,' : '您的營銷團隊，'} <br />
            <span className="italic font-light text-primary">
              {language === 'en' ? 'Without the Overhead' : '無需額外開支'}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            {language === 'en'
              ? 'From branding and video production to ad campaigns and open house marketing — we handle every aspect of your real estate marketing so you can focus on what you do best: closing deals.'
              : '從品牌建設、影片製作到廣告投放及開放日營銷 — 我們處理您地產營銷的每個環節，讓您專注於最擅長的事：成交。'
            }
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/business-basis/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-10 h-12 text-base font-medium shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all hover:-translate-y-1 bg-primary text-white border-none">
                {language === 'en' ? 'Book a Strategy Call' : '預約策略諮詢'}
              </Button>
            </a>
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full px-10 h-12 text-base font-medium bg-white/50 backdrop-blur-sm hover:bg-white border-primary/10 text-primary">
                {language === 'en' ? 'View Plans & Pricing' : '查看方案及定價'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border/50 shadow-sm text-primary text-[11px] font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              <span>{language === 'en' ? 'Core Services' : '核心服務'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
              {language === 'en' ? 'What We Do Best' : '我們的核心優勢'}
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
              {language === 'en'
                ? 'Six core marketing capabilities that drive results for real estate agents across Hong Kong.'
                : '六大核心營銷能力，為香港各地的地產代理帶來實際成效。'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreServices.map((svc, i) => (
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

      {/* Extended Marketing Services */}
      <section className="py-20 container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border/50 shadow-sm text-primary text-[11px] font-bold uppercase tracking-widest mb-6">
            <Layers className="w-3 h-3" />
            <span>{language === 'en' ? 'Full Marketing Suite' : '全方位營銷套件'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
            {language === 'en' ? 'Everything an Agent Needs' : '代理所需的一切'}
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
            {language === 'en'
              ? 'Beyond content and ads, we offer a complete marketing infrastructure to build your brand and grow your business.'
              : '除了內容和廣告，我們提供完整的營銷基礎設施，助您建立品牌及拓展業務。'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {extendedServices.map((svc, i) => (
            <div key={i} className="p-8 rounded-2xl border border-border/50 bg-white/60 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <svc.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-medium mb-3">{svc.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* À La Carte Add-Ons */}
      <section className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border/50 shadow-sm text-primary text-[11px] font-bold uppercase tracking-widest mb-6">
              <LayoutGrid className="w-3 h-3" />
              <span>{language === 'en' ? 'À La Carte' : '按需服務'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
              {language === 'en' ? 'Add-On Services' : '附加服務'}
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
              {language === 'en'
                ? 'Need something specific? Pick and choose individual services to complement your plan.'
                : '需要特定服務？按需選擇個別服務，配合您的方案。'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addons.map((addon, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border/50 bg-white/80 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <addon.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-heading font-medium mb-2">{addon.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-medium mb-6">
            {language === 'en' ? 'Results That Speak' : '成績說明一切'}
          </h2>
          <p className="text-lg text-white/70 font-light mb-12 max-w-2xl mx-auto">
            {language === 'en'
              ? 'We measure success by the deals our agents close, not vanity metrics.'
              : '我們以代理的成交量衡量成功，而非虛假指標。'
            }
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "+312%", label: language === 'en' ? 'Average ROI on Ad Spend' : '平均廣告投資回報率' },
              { stat: "48hrs", label: language === 'en' ? 'Average Content Delivery' : '平均內容交付時間' },
              { stat: "$12", label: language === 'en' ? 'Average Cost Per Lead' : '平均每客源成本' },
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
          {language === 'en' ? 'Ready to Grow Your Business?' : '準備好拓展業務？'}
        </h2>
        <p className="text-lg text-muted-foreground font-light mb-8 max-w-xl mx-auto">
          {language === 'en'
            ? 'Book a free strategy call and we\'ll show you exactly how we can help you close more deals.'
            : '預約免費策略諮詢，我們將向您展示如何助您成交更多。'
          }
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://calendly.com/business-basis/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-10 h-12 text-base font-medium shadow-xl shadow-primary/10">
              {language === 'en' ? 'Book Strategy Call' : '預約策略諮詢'} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <Link href="/platform">
            <Button variant="outline" size="lg" className="rounded-full px-10 h-12 text-base font-medium">
              {language === 'en' ? 'Explore the CRM Platform' : '探索 CRM 平台'}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
