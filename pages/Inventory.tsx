
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Language, Car } from '../types';
import { translations } from '../i18n/translations';
import { cars } from '../data/cars';

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
    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>{children}</div>
  </div>
);

const Inventory: React.FC<{ lang: Language }> = ({ lang }) => {
  const [brand, setBrand] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [sortBy, setSortBy] = useState<'desc' | 'asc'>('desc');
  const [openSections, setOpenSections] = useState<string[]>(['brand', 'body']);

  const brands = useMemo(() => Array.from(new Set(cars.map(c => c.brand))).sort(), []);
  const bodyTypes = useMemo(() => Array.from(new Set(cars.map(c => c.bodyType))).sort(), []);

  const filteredCars = useMemo(() => {
    let result = cars.filter(car => {
      const carPriceNum = parseInt(car.price.replace(/\s/g, '')) || 0;
      return (
        (!brand || car.brand === brand) &&
        (!bodyType || car.bodyType === bodyType) &&
        (!maxPrice || carPriceNum <= maxPrice)
      );
    });

    return result.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/\s/g, '')) || 0;
      const priceB = parseInt(b.price.replace(/\s/g, '')) || 0;
      return sortBy === 'desc' ? priceB - priceA : priceA - priceB;
    });
  }, [brand, bodyType, maxPrice, sortBy]);

  return (
    <div className="pt-32 md:pt-48 pb-20 px-6 md:px-12 max-w-[2200px] mx-auto min-h-screen bg-[#050505]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* FILTERS */}
        <aside className="lg:w-1/4 xl:w-1/5">
          <div className="sticky top-32">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-heading mb-2 leading-none">Nabídka vozů</h1>
            <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-bold mb-12">{filteredCars.length} VOZŮ SKLADEM</p>

            <div className="space-y-1">
              <FilterSection title="Značka" isOpen={openSections.includes('brand')} onToggle={() => setOpenSections(prev => prev.includes('brand') ? prev.filter(x => x !== 'brand') : [...prev, 'brand'])}>
                <div className="flex flex-col space-y-3">
                  <button onClick={() => setBrand('')} className={`text-left text-[11px] uppercase tracking-widest ${!brand ? 'text-[#dbad1e]' : 'text-white/40 hover:text-white'}`}>Všechny značky</button>
                  {brands.map(b => (
                    <button key={b} onClick={() => setBrand(b)} className={`text-left text-[11px] uppercase tracking-widest transition-all ${brand === b ? 'text-[#dbad1e] translate-x-1' : 'text-white/40 hover:text-white'}`}>{b}</button>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Karoserie" isOpen={openSections.includes('body')} onToggle={() => setOpenSections(prev => prev.includes('body') ? prev.filter(x => x !== 'body') : [...prev, 'body'])}>
                <div className="flex flex-wrap gap-2">
                  {bodyTypes.map(b => (
                    <button key={b} onClick={() => setBodyType(bodyType === b ? '' : b)} className={`px-3 py-2 text-[9px] uppercase border transition-all ${bodyType === b ? 'bg-white text-black border-white' : 'border-white/10 text-white/40'}`}>{b}</button>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Cena do" isOpen={openSections.includes('price')} onToggle={() => setOpenSections(prev => prev.includes('price') ? prev.filter(x => x !== 'price') : [...prev, 'price'])}>
                <input type="number" placeholder="Kč" value={maxPrice} onChange={e => setMaxPrice(e.target.value ? parseInt(e.target.value) : '')} className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-xs outline-none focus:border-[#dbad1e] text-white" />
              </FilterSection>
            </div>
          </div>
        </aside>

        {/* LIST - V barvě */}
        <main className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCars.map((car) => {
              const carShortName = `${car.brand} ${car.model.split(' ').slice(0, 2).join(' ')}`;
              return (
                <Link key={car.id} to={`/auto/${car.id}`} className="group bg-[#080808] border border-white/5 hover:border-[#dbad1e]/30 transition-all duration-700 overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={car.image} alt={car.model} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold font-heading uppercase group-hover:text-white transition-colors tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      {carShortName}
                    </h3>
                    <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-6">
                      <div>
                        <p className="text-[9px] tracking-widest text-white/20 uppercase font-bold mb-1">{car.km} • {car.year}</p>
                        <p className="text-xl font-bold font-heading text-white group-hover:text-[#dbad1e] tracking-tighter leading-none transition-colors">{car.price}</p>
                      </div>
                      <span className="text-[10px] tracking-widest text-white/20 uppercase font-bold">Detail →</span>
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

export default Inventory;
