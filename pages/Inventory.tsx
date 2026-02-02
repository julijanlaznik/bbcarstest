
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { cars } from '../data/cars';

const useReveal = <T extends HTMLElement>() => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
};

const Inventory: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const [selectedBrand, setSelectedBrand] = useState('');

  const filteredCars = useMemo(() => {
    return selectedBrand ? cars.filter(c => c.brand === selectedBrand) : cars;
  }, [selectedBrand]);

  const brands = Array.from(new Set(cars.map(c => c.brand)));

  return (
    <div className="pt-40 pb-20 px-8 md:px-20 max-w-[1920px] mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase font-heading mb-4">{t.nav_inventory}</h1>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setSelectedBrand('')}
            className={`px-6 py-2 text-[10px] tracking-widest border uppercase transition-all ${!selectedBrand ? 'bg-white text-black' : 'border-white/10 text-white/40 hover:text-white'}`}
          >
            Vše
          </button>
          {brands.map(brand => (
            <button 
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-6 py-2 text-[10px] tracking-widest border uppercase transition-all ${selectedBrand === brand ? 'bg-white text-black' : 'border-white/10 text-white/40 hover:text-white'}`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCars.map((car, idx) => (
          <CarItem key={car.id} car={car} index={idx} t={t} />
        ))}
      </div>
    </div>
  );
};

const CarItem: React.FC<{ car: any, index: number, t: any }> = ({ car, index, t }) => {
  const { ref, isVisible } = useReveal<HTMLAnchorElement>();
  return (
    <Link 
      ref={ref}
      to={`/auto/${car.id}`} 
      className={`group relative flex flex-col bg-[#080808] pb-10 border border-white/5 transition-all duration-[1s] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <div className="relative aspect-video overflow-hidden mb-8">
        <img src={car.image} alt={car.model} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
      </div>
      <div className="px-10 flex justify-between items-baseline">
        <div>
          <h3 className="text-2xl font-bold font-heading uppercase group-hover:text-[#dbad1e] transition-colors">{car.brand} {car.model}</h3>
          <p className="text-[10px] tracking-widest text-white/20 uppercase font-bold mt-2">{car.km} / {car.year}</p>
        </div>
        <p className="text-2xl font-bold text-[#dbad1e] font-heading">{car.price}</p>
      </div>
    </Link>
  );
};

export default Inventory;
