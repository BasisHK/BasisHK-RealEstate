import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "The Foundation",
      subtitle: "Thoughtful Lead Generation",
      desc: "We don't just chase leads; we attract them. Using targeted social campaigns, we identify buyers who are genuinely interested in your properties, ensuring every conversation starts on the right foot.",
      image: "/images/team-collaboration.jpg",
      align: "right"
    },
    {
      id: "02",
      title: "The Persona",
      subtitle: "Authentic Brand Building",
      desc: "Your personal brand is your most powerful asset. We help you craft a narrative that is uniquely yours, positioning you as a trusted advisor and a market expert with a distinct, approachable voice.",
      image: "/images/agent-meeting-warm.jpg",
      align: "left"
    },
    {
      id: "03",
      title: "The Community",
      subtitle: "Private Network Nurturing",
      desc: "Building trust takes time. We create exclusive spaces on WhatsApp and WeChat where you can nurture relationships with potential buyers, providing value and insight before the sale.",
      image: "/images/luxury-interior-day.jpg",
      align: "right"
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-12 bg-background">
        <div className="container text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6">
            Our <span className="text-primary italic">Craft</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Tailored strategies for the modern, mindful agent.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service) => (
            <section key={service.id} className="container">
              <div className={`flex flex-col md:flex-row gap-12 items-center ${service.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="text-8xl font-heading font-bold text-secondary leading-none select-none opacity-50">
                    {service.id}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                    {service.title}
                  </h2>
                  <h3 className="text-2xl text-primary font-heading italic">
                    {service.subtitle}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {service.desc}
                  </p>
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button variant="outline" className="font-heading font-bold tracking-wide rounded-full border-primary/50 hover:border-primary hover:bg-primary/5 px-8">
                        Begin Journey
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] group overflow-hidden rounded-2xl shadow-xl">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500" />
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="container mt-32 text-center">
          <div className="bg-secondary/30 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10 text-foreground">
              Ready to Grow Your Business?
            </h2>
            <Link href="/contact">
              <Button size="lg" className="font-heading font-bold tracking-wide rounded-full bg-primary text-primary-foreground hover:bg-primary/90 relative z-10 px-10 shadow-lg">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
