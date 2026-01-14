import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/20">
          <div className="container relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-8 leading-none text-foreground">
              Architects of <br />
              <span className="text-primary italic">Trust</span>
            </h1>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
        </section>

        {/* Story */}
        <section className="container py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                <span className="text-foreground font-bold">PropelHK</span> was founded on a simple belief: real estate is a human business.
              </p>
              <p>
                We noticed that while the properties in Hong Kong are world-class, the marketing often felt cold and transactional. We wanted to bring the warmth back.
              </p>
              <p>
                We are a team of storytellers, strategists, and designers dedicated to one mission: <span className="text-primary font-medium">helping you build lasting connections.</span>
              </p>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl bg-white shadow-xl p-8 flex items-center justify-center border border-border/50">
              <div className="text-center space-y-4">
                <div className="text-6xl font-heading font-bold text-primary">100%</div>
                <div className="text-xl font-heading tracking-wide text-muted-foreground">Human-Centric</div>
                <div className="w-12 h-1 bg-secondary mx-auto my-8 rounded-full" />
                <div className="text-6xl font-heading font-bold text-foreground">24/7</div>
                <div className="text-xl font-heading tracking-wide text-muted-foreground">Support & Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-secondary/30">
          <div className="container text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Empathy", desc: "Understanding the needs of both agents and buyers." },
                { title: "Clarity", desc: "Transparent communication, always." },
                { title: "Growth", desc: "Sustainable success over quick wins." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 container text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground">
            Join Our <span className="text-primary italic">Community</span>
          </h2>
          <Link href="/contact">
            <Button size="lg" className="font-heading font-bold tracking-wide rounded-full px-12 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              Get in Touch
            </Button>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
