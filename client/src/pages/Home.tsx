import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, CheckCircle2, Target, Users, XCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-background border-b border-border">
        <div className="container grid lg:grid-cols-2 gap-16 items-center py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting New Agency Partners for Q1 2026
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6 text-foreground leading-tight">
              Systematic Growth for <br />
              <span className="text-primary">Elite Agents</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              We engineer high-performance marketing infrastructures that solve the core challenges of lead acquisition and conversion in the Hong Kong property market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="font-heading font-semibold text-base px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm rounded-md">
                  Schedule Strategy Session
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="font-heading font-semibold text-base px-8 h-14 bg-background hover:bg-secondary/50 rounded-md">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-2xl opacity-50" />
            <img 
              src="/images/hero-daylight-hk.jpg" 
              alt="Hong Kong Skyline" 
              className="relative rounded-xl shadow-2xl border border-border w-full object-cover aspect-[4/3]"
            />
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-lg shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 text-green-700 rounded-full">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Avg. ROI</div>
                  <div className="text-2xl font-bold text-foreground">340%</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Based on Q4 2025 client performance data across residential sales campaigns.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis / Pain Points */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              The Market Has Shifted. <br />
              <span className="text-muted-foreground">Traditional Methods Are Failing.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Hong Kong real estate landscape is saturated. Relying solely on property portals and cold calling results in diminishing returns. We address the three critical bottlenecks facing modern agents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: "Portal Saturation",
                desc: "Listing platforms are overcrowded. Your premium listings are buried under thousands of duplicates, forcing a race to the bottom on price.",
                solution: "Direct-to-Consumer Channels",
                icon: XCircle
              },
              {
                problem: "Low Lead Quality",
                desc: "Generic inquiries from window shoppers waste your valuable time. The lack of pre-qualification means hours lost on dead ends.",
                solution: "Algorithmic Pre-Qualification",
                icon: XCircle
              },
              {
                problem: "Commoditization",
                desc: "Without a distinct brand, you are just another agent. Clients choose based on commission rates rather than value and expertise.",
                solution: "Authority Positioning",
                icon: XCircle
              }
            ].map((item, i) => (
              <Card key={i} className="bg-card border border-border shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-6 h-6 text-red-500" />
                    <h3 className="font-bold text-lg text-foreground">The Challenge</h3>
                  </div>
                  <CardTitle className="text-xl font-heading mb-2">{item.problem}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-bold text-primary text-sm uppercase tracking-wide">The Solution</span>
                    </div>
                    <p className="text-foreground font-medium">
                      {item.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
                Our Methodology
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't offer generic "social media management." We deploy a proprietary three-stage framework designed to capture, convert, and close.
              </p>
              
              <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-heading font-semibold">
                    1. Precision Acquisition
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    We bypass the noise of portals by targeting high-net-worth individuals directly on their preferred platforms. Using lookalike audiences and behavioral data, we place your listings in front of buyers who are actively searching but haven't contacted an agent yet.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl font-heading font-semibold">
                    2. Automated Nurturing
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    Speed to lead is critical. Our systems automatically engage new inquiries via WhatsApp and email within seconds. We deliver value-driven content—market reports, area guides—that builds trust before you even pick up the phone.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-heading font-semibold">
                    3. Brand Ecosystem
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    We transform your digital presence into a 24/7 sales asset. By consistently publishing high-quality, educational content, we position you as the "go-to" expert in your specific territory, making client acquisition inbound rather than outbound.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/social-growth-plant.jpg" alt="Growth" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                <img src="/images/agent-meeting-warm.jpg" alt="Meeting" className="rounded-lg shadow-lg w-full h-64 object-cover mt-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Stop Competing. Start Dominating.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            The market belongs to those who control the attention. Let us build the infrastructure you need to scale your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-heading font-bold text-primary h-14 px-10">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
