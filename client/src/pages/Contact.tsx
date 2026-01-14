import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We'll be in touch shortly to start the conversation.",
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-none text-foreground">
              Let's Start <br />
              <span className="text-primary italic">Something New.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md font-light">
              We're excited to hear your story. Whether you're looking to refresh your brand or find new leads, we're here to help you grow.
            </p>
            
            <div className="space-y-4 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="font-heading tracking-wide text-sm text-muted-foreground">Accepting New Partners</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-heading tracking-wide text-sm text-muted-foreground">Free Initial Consultation</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-heading tracking-wide text-xs text-muted-foreground uppercase">Your Name</Label>
                <Input id="name" required className="bg-secondary/30 border-transparent focus:border-primary rounded-xl h-12" placeholder="Jane Doe" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="agency" className="font-heading tracking-wide text-xs text-muted-foreground uppercase">Agency</Label>
                <Input id="agency" required className="bg-secondary/30 border-transparent focus:border-primary rounded-xl h-12" placeholder="e.g. Midland, Centaline" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="font-heading tracking-wide text-xs text-muted-foreground uppercase">WhatsApp Number</Label>
                <Input id="whatsapp" type="tel" required className="bg-secondary/30 border-transparent focus:border-primary rounded-xl h-12" placeholder="+852" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="font-heading tracking-wide text-xs text-muted-foreground uppercase">Monthly Budget (HKD)</Label>
                <Select>
                  <SelectTrigger className="bg-secondary/30 border-transparent focus:border-primary rounded-xl h-12">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-30k">$10,000 - $30,000</SelectItem>
                    <SelectItem value="30k+">$30,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-heading tracking-wide text-xs text-muted-foreground uppercase">How can we help?</Label>
                <Textarea id="message" className="bg-secondary/30 border-transparent focus:border-primary rounded-xl min-h-[100px]" placeholder="Tell us about your goals..." />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full font-heading font-bold tracking-wide rounded-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-lg">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
