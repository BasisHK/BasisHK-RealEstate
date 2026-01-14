import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Building, Home, Landmark, Warehouse, Hotel, Castle } from 'lucide-react';

const LOGOS = [
  { name: 'Sun Hung Kai Properties', icon: Building2 },
  { name: 'CK Asset', icon: Building },
  { name: 'Henderson Land', icon: Home },
];

export function LogoCarousel() {
  const { t } = useLanguage();

  return (
    <div className="w-full py-12 bg-background border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
          {t('home.trusted.title')}
        </p>
      </div>
      
      <div className="relative flex overflow-hidden group mask-gradient">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of logos */}
          <div className="flex items-center space-x-24 md:space-x-32 px-12 md:px-16">
            {LOGOS.map((logo, index) => (
              <div key={index} className="flex items-center justify-center gap-3 h-16 w-auto min-w-[200px] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <span className="text-sm md:text-base font-heading font-semibold text-foreground whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-24 md:space-x-32 px-12 md:px-16">
            {LOGOS.map((logo, index) => (
              <div key={`dup-${index}`} className="flex items-center justify-center gap-3 h-16 w-auto min-w-[200px] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <span className="text-sm md:text-base font-heading font-semibold text-foreground whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
          {/* Triplicate set for wide screens */}
          <div className="flex items-center space-x-24 md:space-x-32 px-12 md:px-16">
            {LOGOS.map((logo, index) => (
              <div key={`dup2-${index}`} className="flex items-center justify-center gap-3 h-16 w-auto min-w-[200px] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <span className="text-sm md:text-base font-heading font-semibold text-foreground whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
          {/* Quadruplicate set for extra wide screens to ensure no gaps */}
          <div className="flex items-center space-x-24 md:space-x-32 px-12 md:px-16">
            {LOGOS.map((logo, index) => (
              <div key={`dup3-${index}`} className="flex items-center justify-center gap-3 h-16 w-auto min-w-[200px] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <span className="text-sm md:text-base font-heading font-semibold text-foreground whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
