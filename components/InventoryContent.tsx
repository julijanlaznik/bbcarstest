
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { cars } from '@/data/cars';
import { Language } from '@/types';
import { translations } from '@/i18n/translations';

const FilterSection: React.FC<{ 
  title: string, 
  isOpen: boolean, 
  onToggle: () => void, 
  children: React.ReactNode 
}> = ({ title, isOpen, onToggle, children }) => (
  <div className="border-b border-white/5 py-6">
    <button onClick={onToggle} className="w-full flex justify-between items-center group">
      <span className="text-[10px] tracking-[0.4em] text-white/40 group-hover:text-white uppercase font-bold transition-colors">{title}</span>
      <span className={`text-white/20 transition-transform duration-500 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>{children}</div>
  </div>
);

const InventoryContent: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const [openSections, setOpenSections] = useState<string[]>(['brand']);
  const [brand, setBrand] = useState('');

  const brands = useMemo(() => Array.from(new Set(cars.map(c => c.brand))).sort(), []);

  const filteredCars = useMemo(() => {
    return cars.filter(car => !brand || car.brand === brand);
  }, [brand]);

  return (
    <div className="pt-32 md:pt-48 pb-20 px-6 md:px-12 max-w-[2200px] mx-auto min-h-screen bg-[#050505]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <aside className="lg:w-1/4 xl:w-1/5 flex-shrink-0">
          <div className="lg:sticky lg:top-32 space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-heading mb-2 leading-none">Nabídka vozů</h1>
              <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-bold">{filteredCars.length} VOZŮ SKLADEM</p>
            </div>
            <div className="pt-4">
              <FilterSection title="Značka" isOpen={openSections.includes('brand')} onToggle={() => setOpenSections(prev => prev.includes('brand') ? prev.filter(s => s !== 'brand') : [...prev, 'brand'])}>
                <div className="flex flex-col space-y-3">
                  {brands.map(b => (
                    <button key={b} onClick={() => setBrand(brand === b ? '' : b)} className={`text-left text-xs uppercase tracking-widest transition-all ${brand === b ? 'text-[#dbad1e] translate-x-2' : 'text-white/40 hover:text-white'}`}>{b}</button>
                  ))}
                </div>
              </FilterSection>
            </div>
          </div>
        </aside>

        <main className="lg:w-3/4 xl:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCars.map((car) => {
              const shortName = `${car.brand} ${car.model.split(' ').slice(0, 2).join(' ')}`;
              return (
                <Link key={car.id} href={`/auto/${car.id}`} className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-700 hover:border-[#dbad1e]/20">
                  <div className="aspect-video overflow-hidden">
                    <img src={car.image} alt={car.model} className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold font-heading uppercase group-hover:text-white transition-colors leading-tight tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      {shortName}
                    </h3>
                    <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-6">
                      <div>
                        <p className="text-[9px] tracking-widest text-white/20 uppercase font-bold mb-1">{car.km} • {car.year}</p>
                        <p className="text-2xl font-bold text-white group-hover:text-[#dbad1e] font-heading tracking-tighter leading-none transition-colors">{car.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default InventoryContent;
