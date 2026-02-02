
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { cars } from '../data/cars';

const CarDetail: React.FC<{ lang: Language }> = ({ lang }) => {
  const { id } = useParams();
  const car = cars.find(c => c.id === id);
  const t = translations[lang];
  const inquiryFormRef = useRef<HTMLDivElement>(null);
  
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const carName = car ? `${car.brand} ${car.model.split(' ').slice(0, 2).join(' ')}` : '';

  const gridImages = useMemo(() => {
    if (!car) return [];
    const all = [car.image, ...car.images, ...car.interiorImages, ...car.exteriorImages];
    const unique = Array.from(new Set(all));
    const result = [...unique];
    while(result.length < 9) result.push(unique[result.length % unique.length]);
    return result.slice(0, 9);
  }, [car]);

  const nextImg = useCallback(() => {
    setActiveImgIndex((prev) => (prev + 1) % (car?.images.length || 1));
  }, [car?.images.length]);

  useEffect(() => {
    const timer = setInterval(nextImg, 5000); 
    return () => clearInterval(timer);
  }, [nextImg]);

  if (!car) return <Navigate to="/" replace />;

  return (
    <div className="bg-[#050505] min-h-screen">
      
      {/* 1. HERO - PURE VISUAL (100vh) */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {car.images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt="" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${idx === activeImgIndex ? 'opacity-100' : 'opacity-0'}`} 
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#050505]" />
      </section>

      {/* 2. CONVERSION AREA */}
      <section className="px-6 md:px-12 lg:px-20 py-24 max-w-screen-2xl mx-auto border-b border-white/5">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold uppercase font-heading tracking-tighter text-white leading-none">
              {carName}
            </h1>
            <p className="text-3xl md:text-4xl font-bold font-heading text-[#dbad1e] tracking-tighter">
              {car.price}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 w-full lg:w-[500px]">
            {/* WHATSAPP CONTACT - SOLID WHITE */}
            <a href="https://wa.me/420605034911" target="_blank" rel="noreferrer" className="btn-white">
              KONTAKT
            </a>
            {/* INQUIRY - SOLID GOLD */}
            <button 
              onClick={() => inquiryFormRef.current?.scrollIntoView({ behavior: 'smooth' })} 
              className="btn-gold"
            >
              MÁM ZÁJEM
            </button>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECS */}
      <section className="px-6 md:px-12 lg:px-20 py-20 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-3 font-bold">ROK VÝROBY</p>
            <p className="text-2xl font-bold font-heading">{car.year}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-3 font-bold">NAJETÉ KM</p>
            <p className="text-2xl font-bold font-heading">{car.km}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-3 font-bold">VÝKON</p>
            <p className="text-2xl font-bold font-heading">{car.powerKw}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-3 font-bold">POHON</p>
            <p className="text-2xl font-bold font-heading">{car.drivetrain}</p>
          </div>
        </div>
      </section>

      {/* 4. EQUIPMENT LIST */}
      <section className="px-6 md:px-12 lg:px-20 py-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold uppercase font-heading tracking-tighter leading-none mb-4">Výbava vozu</h2>
            <div className="h-1 w-12 bg-[#dbad1e]" />
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {car.detailedDescription?.[lang]?.map((item, idx) => (
              <div key={idx} className="border-b border-white/5 py-4">
                <span className="text-white/60 text-lg font-light tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRUTALIST FULL-WIDTH GALLERY */}
      <section className="bg-white/5 py-[1px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
          {gridImages.slice(0, 8).map((img, idx) => (
            <div key={idx} className="aspect-video overflow-hidden bg-black">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
            </div>
          ))}
          <div className="md:col-span-2 aspect-[21/9] overflow-hidden bg-black">
            <img src={gridImages[8]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
          </div>
        </div>
      </section>

      {/* 6. MINIMAL INQUIRY FORM */}
      <section ref={inquiryFormRef} className="py-40 px-6 md:px-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase font-heading">Nezávazná poptávka</h2>
          </div>
          
          <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}} className="bg-[#0a0a0a] p-8 md:p-20 space-y-12 shadow-2xl">
            {submitted ? (
              <div className="py-20 text-center">
                <h3 className="text-3xl font-bold uppercase font-heading text-[#dbad1e]">Odesláno</h3>
                <p className="text-white/30 mt-4 text-lg">Brzy se Vám ozveme.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col space-y-4 border-b border-white/10 pb-4">
                    <label className="text-[10px] tracking-widest font-bold text-white/20 uppercase">Jméno a příjmení</label>
                    <input required type="text" placeholder="Jan Novák" className="bg-transparent outline-none text-2xl font-bold uppercase tracking-tight" />
                  </div>
                  <div className="flex flex-col space-y-4 border-b border-white/10 pb-4">
                    <label className="text-[10px] tracking-widest font-bold text-white/20 uppercase">Telefon</label>
                    <input required type="tel" placeholder="+420" className="bg-transparent outline-none text-2xl font-bold uppercase tracking-tight" />
                  </div>
                </div>
                <div className="flex flex-col space-y-4 border-b border-white/10 pb-4">
                  <label className="text-[10px] tracking-widest font-bold text-white/20 uppercase">E-mail</label>
                  <input required type="email" placeholder="vas@email.cz" className="bg-transparent outline-none text-2xl font-bold uppercase tracking-tight" />
                </div>
                <button type="submit" className="btn-gold py-10">ODESLAT</button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default CarDetail;
