import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const tiers = [
    {
      name: "Acquisition Core",
      price: "Ideal for Individual Agents",
      desc: "A focused lead generation system designed to deliver a consistent stream of qualified buyer inquiries.",
      features: [
        "Meta Ads Management (FB/IG)",
        "Custom Audience Targeting",
        "Lead Capture Forms",
        "Weekly Performance Reports",
        "Basic CRM Integration"
      ],
      cta: "Start Growth",
      highlight: false
    },
    {
      name: "Authority Scale",
      price: "For Top Producers",
      desc: "Comprehensive brand building and lead nurturing ecosystem to dominate your territory.",
      features: [
        "Everything in Acquisition Core",
        "Personal Brand Strategy",
        "Content Creation (4 Posts/Month)",
        "Automated Email/WhatsApp Nurture",
        "Landing Page Development",
        "Priority Support"
      ],
      cta: "Scale Now",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "For Agencies & Teams",
      desc: "Full-service marketing department replacement with advanced analytics and custom development.",
      features: [
        "Everything in Authority Scale",
        "Multi-Agent Account Management",
        "Video Production Support",
        "Custom Web Development",
        "Advanced API Integrations",
        "Dedicated Account Manager"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Header */}
        <div className="bg-secondary/30 py-20 border-b border-border">
          <div className="container text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 text-foreground">
              Service Architecture
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scalable marketing infrastructure designed for every stage of your real estate business growth.
            </p>
          </div>
        </div>

        {/* Detailed Features Grid */}
        <div className="container py-24">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Technical Capabilities</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our platform leverages enterprise-grade tools usually reserved for large multinational agencies. We bring this power to your personal practice.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Predictive Targeting",
                    desc: "We utilize 3rd party data partnerships to identify users exhibiting high-intent signals (e.g., mortgage calculator usage, property portal visits) before they inquire elsewhere."
                  },
                  {
                    title: "Cross-Channel Retargeting",
                    desc: "A user who views your listing video on Instagram will see your testimonial ad on Facebook and your market report on Google Display Network, creating an omnipresent brand effect."
                  },
                  {
                    title: "Conversion Rate Optimization (CRO)",
                    desc: "We continuously A/B test ad creatives, headlines, and landing page layouts to lower your Cost Per Lead (CPL) and increase lead quality over time."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <h3 className="font-bold text-xl mb-6">The PropelHK Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Meta Ads Manager", "Google Analytics 4", "HubSpot CRM", "Zapier Automation", "Canva Enterprise", "OpenAI API"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg border border-border/50">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  "The technical setup alone would take an individual agent months to configure. PropelHK had us live in 48 hours."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-bold text-sm">Sarah Chen</div>
                    <div className="text-xs text-muted-foreground">Senior Director, Centaline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing / Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Engagement Models</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {tiers.map((tier, i) => (
                <Card key={i} className={`relative flex flex-col ${tier.highlight ? 'border-primary shadow-lg scale-105 z-10' : 'border-border shadow-sm'}`}>
                  {tier.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading font-bold">{tier.name}</CardTitle>
                    <p className="text-sm text-muted-foreground font-medium mt-2">{tier.price}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-6 min-h-[60px]">
                      {tier.desc}
                    </p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className={`w-full ${tier.highlight ? 'bg-primary' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}>
                        {tier.cta} <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
