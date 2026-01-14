import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Leaf, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-daylight-hk.jpg" 
            alt="Hong Kong Skyline Day" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 text-foreground animate-in fade-in slide-in-from-bottom-10 duration-1000">
            Cultivate <br />
            <span className="text-primary italic">Lasting Connections</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            Real estate is about people, not just properties. We help you build genuine relationships with buyers through thoughtful, organic social media strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link href="/contact">
              <Button size="lg" className="font-heading font-bold tracking-wide text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Start Growing
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="font-heading font-bold tracking-wide text-lg px-8 py-6 rounded-full border-2 border-primary/20 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-primary transition-all duration-300">
                Our Approach
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/images/social-growth-plant.jpg" 
                alt="Organic Growth" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Move Beyond <br />
              <span className="text-primary italic">The Noise.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Aggressive sales tactics push people away. In a crowded market, trust is your most valuable currency.
            </p>
            <p className="text-lg text-foreground font-medium mb-8 border-l-4 border-primary pl-4">
              We believe in attracting the right buyers through value, authenticity, and storytelling.
            </p>
            <ul className="space-y-4">
              {[
                "Build genuine community",
                "Share your unique story",
                "Attract, don't just chase"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/80">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Nurture Your <span className="text-primary italic">Brand</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our holistic approach combines data with design to create a presence that feels natural and inviting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community First",
                desc: "We help you find your tribe. Connect with buyers who align with your values and lifestyle.",
                color: "text-primary"
              },
              {
                icon: Leaf,
                title: "Organic Growth",
                desc: "Sustainable strategies that build long-term authority, not just quick clicks.",
                color: "text-green-600"
              },
              {
                icon: Zap,
                title: "Clear Communication",
                desc: "Cut through the jargon. We craft messages that resonate clearly and emotionally.",
                color: "text-yellow-600"
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 rounded-2xl overflow-hidden">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="font-heading text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/luxury-interior-day.jpg" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground">
            Design That <br /> <span className="text-primary italic">Breathes</span>
          </h2>
          <Link href="/services">
            <Button size="lg" className="font-heading font-bold tracking-wide rounded-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-10">
              Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
