
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  const filteredCars = useMemo(() => {
    if (!query.trim()) return [];
    return cars.filter(c => 
      c.brand.toLowerCase().includes(query.toLowerCase()) || 
      c.model.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-zinc-950/40 backdrop-blur-[60px] flex flex-col items-center justify-center px-8 animate-in fade-in duration-500">
      <button onClick={onClose} className="absolute top-6 right-6 md:top-10 md:right-10 text-white/30 hover:text-white transition-colors">
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="w-full max-w-3xl">
        <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Hledat vůz..." className="w-full bg-transparent border-b border-white/20 py-4 md:py-6 text-xl md:text-4xl font-bold uppercase tracking-tighter outline-none placeholder:text-white/10 focus:border-[#dbad1e] transition-all text-center" />
        <div className="mt-8 md:mt-12 space-y-3 max-h-[50vh] overflow-y-auto pr-2">
          {filteredCars.map((car) => (
            <button key={car.id} onClick={() => { navigate(`/auto/${car.id}`); onClose(); }} className="w-full flex items-center justify-between p-3 bg-white/[0.03] hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all text-left">
              <div className="flex items-center space-x-4">
                <div className="w-12 md:w-20 aspect-video overflow-hidden border border-white/10">
                  <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
                </div>
                <div><p className="text-[8px] uppercase tracking-widest text-white/30 font-bold">{car.brand}</p><p className="text-sm md:text-base font-bold uppercase">{car.model}</p></div>
              </div>
              <p className="text-xs md:text-sm font-bold">{car.price}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
