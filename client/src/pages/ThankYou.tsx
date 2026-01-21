import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { CheckCircle, Calendar, ArrowLeft } from "lucide-react";

export default function ThankYou() {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO 
        title={t('thankyou.title')}
        description={t('thankyou.desc')}
        url="/thank-you"
      />
      <div className="min-h-[80vh] bg-background flex flex-col items-center justify-center px-4 text-center">
        <div className="w-full max-w-2xl space-y-8 animate-in fade-in zoom-in duration-500">
          
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="h-24 w-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
              {t('thankyou.title')}
            </h1>
            <p className="text-xl font-medium text-foreground/80">
              {t('thankyou.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
              {t('thankyou.desc')}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="https://calendly.com/business-basis/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button size="lg" className="w-full sm:w-auto gap-2 font-semibold h-12 text-base">
                <Calendar className="h-5 w-5" />
                {t('thankyou.button')}
              </Button>
            </a>
            
            <Link href="/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 h-12 text-base">
                <ArrowLeft className="h-5 w-5" />
                {t('thankyou.back')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
