
'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Link from 'next/link';
import { Car, Language } from '@/types';
import { translations } from '@/i18n/translations';

interface Props {
  car: Car;
  lang: Language;
}

const CarDetailContent: React.FC<Props> = ({ car, lang }) => {
  const t = translations[lang];
  const inquiryFormRef = useRef<HTMLDivElement>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [key, setKey] = useState(0);

  const displayGridImages = useMemo(() => {
    const combined = [...car.images, ...car.interiorImages, ...car.exteriorImages];
    const unique = Array.from(new Set(combined));
    return unique.slice(0, 6);
  }, [car]);

  const nextImg = useCallback(() => {
    setActiveImgIndex((prev) => (prev + 1) % car.images.length);
    setKey(prev => prev + 1);
  }, [car.images.length]);

  useEffect(() => {
    const timer = setInterval(nextImg, 6000);
    return () => clearInterval(timer);
  }, [nextImg]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="reveal-up bg-[#020202] overflow-x-hidden">
      {/* Back to Inventory - Floating subtle navigation */}
      <Link 
        href="/nabidka" 
        className="fixed top-10 left-6 md:left-20 z-[90] group flex items-center space-x-3 text-[9px] font-bold uppercase tracking-[0.4em] text-white opacity-30 hover:opacity-100 transition-all duration-500"
      >
        <span className="text-lg leading-none transition-transform duration-500 group-hover:-translate-x-1">←</span>
        <span className="hidden sm:inline">Zpět na nabídku</span>
        <span className="sm:hidden">Zpět</span>
      </Link>

      {/* Hero Slider */}
      <section className="relative h-[70vh] md:h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 select-none">
          {car.images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`${car.model} view ${idx}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${idx === activeImgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#020202]" />
        </div>
        <div className="absolute bottom-16 left-6 md:left-20 z-20 w-full max-w-7xl">
           <p className="text-[10px] tracking-[0.6em] font-bold text-[#dbad1e] mb-4 uppercase">{car.brand}</p>
           <h1 className="text-5xl md:text-9xl font-bold font-heading tracking-tighter-extra uppercase leading-[0.85]">{car.model}</h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-6 md:px-20 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start border-b border-white/5 pb-24">
          <div className="lg:col-span-8">
            <h2 className="text-[10px] tracking-[0.5em] font-bold text-white/30 mb-8 uppercase">Specifikace vozu</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
              {[
                { label: 'Najeto', value: car.km },
                { label: 'Rok', value: car.year },
                { label: 'Výkon', value: car.powerKw },
                { label: 'Motor', value: car.engineCapacity },
                { label: 'Palivo', value: car.specs.fuel },
                { label: 'Pohon', value: car.drivetrain },
              ].map((spec, i) => (
                <div key={i}>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-3 font-bold">{spec.label}</p>
                  <p className="text-xl md:text-2xl font-bold font-heading tracking-tight uppercase">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 p-12">
             <p className="text-[9px] tracking-[0.5em] font-bold text-white/30 mb-4 uppercase text-center">Prodejní cena</p>
             <p className="text-4xl md:text-5xl font-bold font-heading text-center tracking-tighter text-[#dbad1e] mb-10">{car.price}</p>
             <button 
                onClick={() => inquiryFormRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full luxury-button bg-white text-black hover:bg-[#dbad1e]"
              >
                Mám zájem
              </button>
          </div>
        </div>
      </section>

      {/* Grid Images */}
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-[2px] bg-white/5">
        {displayGridImages.map((img, idx) => (
          <div key={idx} className="aspect-square overflow-hidden bg-[#080808]">
            <img src={img} alt="Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]" />
          </div>
        ))}
      </section>

      {/* Inquiry Form */}
      <section ref={inquiryFormRef} className="py-40 px-6 md:px-20 bg-[#020202]">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold font-heading tracking-tighter uppercase mb-12">Domluvte si prohlídku</h2>
          <form onSubmit={handleInquirySubmit} className="max-w-2xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input required type="text" placeholder="JMÉNO" className="bg-transparent border-b border-white/10 outline-none py-4 text-sm font-bold tracking-widest focus:border-[#dbad1e] transition-all" />
              <input required type="email" placeholder="E-MAIL" className="bg-transparent border-b border-white/10 outline-none py-4 text-sm font-bold tracking-widest focus:border-[#dbad1e] transition-all" />
            </div>
            <textarea rows={2} placeholder="ZPRÁVA" className="w-full bg-transparent border-b border-white/10 outline-none py-4 text-sm font-bold tracking-widest focus:border-[#dbad1e] transition-all" />
            <button type="submit" className="luxury-button w-full bg-[#dbad1e] text-black">Odeslat poptávku</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CarDetailContent;
