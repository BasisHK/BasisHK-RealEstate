import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LOGOS = [
  { name: 'Sun Hung Kai Properties', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Sun_Hung_Kai_Properties.svg/1200px-Sun_Hung_Kai_Properties.svg.png' },
  { name: 'CK Asset', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/CK_Asset_Holdings_Logo.svg/2560px-CK_Asset_Holdings_Logo.svg.png' },
  { name: 'Henderson Land', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Henderson_Land_Development_Logo.svg/1200px-Henderson_Land_Development_Logo.svg.png' },
  { name: 'New World Development', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/New_World_Development_Logo.svg/1200px-New_World_Development_Logo.svg.png' },
  { name: 'Sino Group', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Sino_Group_logo.svg/1200px-Sino_Group_logo.svg.png' },
  { name: 'Swire Properties', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Swire_Properties_Logo.svg/1200px-Swire_Properties_Logo.svg.png' },
  { name: 'Wheelock Properties', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Wheelock_and_Company_Logo.svg/1200px-Wheelock_and_Company_Logo.svg.png' },
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
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 px-8">
          {LOGOS.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-12 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {LOGOS.map((logo, index) => (
            <div key={`dup-${index}`} className="flex items-center justify-center h-12 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-16 px-8">
          {LOGOS.map((logo, index) => (
            <div key={`dup2-${index}`} className="flex items-center justify-center h-12 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {LOGOS.map((logo, index) => (
            <div key={`dup3-${index}`} className="flex items-center justify-center h-12 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
