
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { cars } from '@/data/cars';

const HomeContent: React.FC<{ lang: string }> = ({ lang }) => {
  const [mounted, setMounted] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  // Rotace obrázků v Hero sekci pro dynamiku - nyní 8 sekund
  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const heroImages = [
    cars[0].image,
    cars[1].image,
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=100&w=2400'
  ];

  return (
    <div className="overflow-x-hidden noise-bg">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center md:items-end pb-24 md:pb-40 px-6 md:px-20 overflow-hidden bg-black">
        {/* Background Images with smooth but fast crossfade (700ms) */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentImg ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={img} 
                className="w-full h-full object-cover scale-105"
                alt={`Hero Background ${idx}`}
              />
            </div>
          ))}
          
          {/* Hluboký levostranný gradient - upraveno via-black/50 pro dřívější konec */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-[1]" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent z-[2]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="max-w-5xl">
            {/* Barva změněna z text-white/40 na text-white */}
            <span className={`block text-[10px] tracking-[0.6em] font-bold text-white mb-12 transition-all duration-[1200ms] text-readable ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} uppercase`}>
              {lang === 'CZ' ? 'Prémiové vozy s osobním přístupem' : 'Premium vehicles with a personal approach'}
            </span>
            
            <h1 className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light font-heading tracking-[0.1em] leading-none mb-14 text-white text-readable whitespace-nowrap transition-all duration-[1400ms] delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              VÁŠ VYSNĚNÝ VŮZ ČEKÁ.
            </h1>

            <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-[1600ms] delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link href="/nabidka" className="luxury-button bg-white text-black hover:bg-[#dbad1e] text-center">
                Prohlédnout kolekci
              </Link>
              <Link href="/kontakt" className="luxury-button border-white/20 text-white hover:bg-white/5 text-center">
                Rezervovat schůzku
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Intro Section */}
      <section className="py-40 px-6 md:px-20 bg-[#020202]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-7xl font-bold font-heading tracking-tighter-extra uppercase mb-10 leading-[0.9]">
              Standard, který <br/> <span className="text-[#dbad1e]">překonává očekávání.</span>
            </h2>
            <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              V BBCars nevěříme v zaplněné bazary. Každý vůz v naší nabídce prochází osobním výběrem a důkladnou prověrkou. Hledáme pouze ty kusy, které mají jasný původ, perfektní stav a příběh, za kterým si můžeme stát.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
             <div className="aspect-[3/4] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-4xl font-bold font-heading mb-4 text-[#dbad1e]">15+</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-white/40">Let zkušeností</span>
             </div>
             <div className="aspect-[3/4] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center p-8 text-center mt-12">
                <span className="text-4xl font-bold font-heading mb-4 text-[#dbad1e]">500+</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-white/40">Prodaných vozů</span>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-32 px-6 md:px-20 bg-[#020202] border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
             <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter-extra uppercase">Právě v showroomu</h2>
             {/* Odkaz doplněn o šipku a flex zarovnání */}
             <Link href="/nabidka" className="text-[10px] tracking-[0.5em] text-[#dbad1e] hover:text-white transition-colors uppercase font-bold border-b border-[#dbad1e]/20 pb-2 flex items-center gap-2">
               Zobrazit celou nabídku <span className="text-[14px] leading-none">→</span>
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cars.slice(0, 4).map((car) => (
              <Link key={car.id} href={`/auto/${car.id}`} className="group block relative overflow-hidden bg-[#080808] border border-white/5 p-4 transition-all duration-700 hover:border-[#dbad1e]/20">
                <div className="aspect-[16/10] overflow-hidden mb-8">
                  <img src={car.image} alt={car.model} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]" />
                </div>
                <div className="px-6 pb-6 flex justify-between items-end">
                  <div>
                    <p className="text-[9px] tracking-[0.5em] text-white/20 uppercase font-bold mb-3">{car.brand}</p>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading uppercase group-hover:text-[#dbad1e] transition-colors">{car.model}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold tracking-tighter font-heading text-[#dbad1e]">{car.price}</p>
                    <p className="text-[9px] tracking-widest text-white/20 uppercase font-bold">{car.km}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
