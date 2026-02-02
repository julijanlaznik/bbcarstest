
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { cars } from '@/data/cars';

const HomeContent: React.FC<{ lang: string }> = ({ lang }) => {
  const [mounted, setMounted] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

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
    <div className="overflow-x-hidden">
      {/* Hero - Barevné */}
      <section className="relative h-screen flex items-center md:items-end pb-24 md:pb-40 px-6 md:px-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === currentImg ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={img} 
                className="w-full h-full object-cover scale-105"
                alt={`Hero Background ${idx}`}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-[1]" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent z-[2]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <span className={`block text-[10px] tracking-[0.6em] font-bold text-white mb-12 transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} uppercase`}>
              {lang === 'CZ' ? 'Prémiové vozy s osobním přístupem' : 'Premium vehicles with a personal approach'}
            </span>
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter leading-none mb-14 text-white transition-all duration-[1400ms] delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              VÁŠ VYSNĚNÝ <br/> VŮZ ČEKÁ.
            </h1>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-[1600ms] delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link href="/nabidka" className="flex items-center justify-center px-10 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-[#dbad1e] transition-all">
                Prohlédnout kolekci
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid - Barevné */}
      <section className="py-32 px-6 md:px-20 bg-[#020202] border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
             <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter uppercase">Showroom</h2>
             <Link href="/nabidka" className="text-[10px] tracking-[0.5em] text-[#dbad1e] hover:text-white transition-colors uppercase font-bold border-b border-[#dbad1e]/20 pb-2">
               Celá nabídka →
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cars.slice(0, 4).map((car) => {
              const short = `${car.brand} ${car.model.split(' ').slice(0, 2).join(' ')}`;
              return (
                <Link key={car.id} href={`/auto/${car.id}`} className="group block relative overflow-hidden bg-[#080808] border border-white/5 transition-all duration-700 hover:border-[#dbad1e]/20">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={car.image} alt={car.model} className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-105" />
                  </div>
                  <div className="p-10 flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold font-heading uppercase group-hover:text-[#dbad1e] transition-colors">{short}</h3>
                      <p className="text-[9px] tracking-[0.5em] text-white/20 uppercase font-bold mt-2">{car.km} • {car.year}</p>
                    </div>
                    <p className="text-2xl font-bold tracking-tighter font-heading text-white">{car.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
