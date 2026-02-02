
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { cars } from '@/data/cars';
import { Language } from '@/types';
import { translations } from '@/i18n/translations';

const InventoryContent: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const [selectedBrand, setSelectedBrand] = useState('');

  const filteredCars = useMemo(() => {
    return selectedBrand ? cars.filter(c => c.brand === selectedBrand) : cars;
  }, [selectedBrand]);

  const brands = Array.from(new Set(cars.map(c => c.brand)));

  return (
    <div className="pt-40 pb-20 px-8 md:px-20 max-w-[1920px] mx-auto min-h-screen">
      <div className="mb-12">
        {/* Gap zcela odstraněn pro maximální integraci */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase font-heading mb-0">{t.nav_inventory}</h1>
        
        {/* Simple Brand Filter */}
        <div className="flex flex-wrap gap-4 mt-2">
          <button 
            onClick={() => setSelectedBrand('')}
            className={`px-6 py-2 text-[10px] tracking-widest border uppercase ${!selectedBrand ? 'bg-white text-black' : 'border-white/10 text-white/40'}`}
          >
            Vše
          </button>
          {brands.map(brand => (
            <button 
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-6 py-2 text-[10px] tracking-widest border uppercase ${selectedBrand === brand ? 'bg-white text-black' : 'border-white/10 text-white/40'}`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCars.map((car) => (
          <Link key={car.id} href={`/auto/${car.id}`} className="group relative bg-[#080808] pb-10 border border-white/5 overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img src={car.image} alt={car.model} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
            </div>
            <div className="px-10 pt-8 flex justify-between items-baseline">
              <h3 className="text-2xl font-bold font-heading uppercase group-hover:text-[#dbad1e] transition-colors">{car.brand} {car.model}</h3>
              <p className="text-xl font-bold text-[#dbad1e]">{car.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InventoryContent;
