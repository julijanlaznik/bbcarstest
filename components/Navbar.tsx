
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchOverlay from './SearchOverlay';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < 100) setShowHeader(true);
      else if (current < lastScrollY) setShowHeader(true);
      else setShowHeader(false);
      setLastScrollY(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuLinks = [
    { to: "/", label: "Úvod" },
    { to: "/nabidka", label: "Nabídka vozů" },
    { to: "/journal", label: "Aktuality" },
    { to: "/vuz-na-prani", label: "Vůz na objednávku" },
    { to: "/vykup", label: "Výkup" },
    { to: "/sluzby", label: "Služby" },
    { to: "/pujcovna", label: "Pronájem vozidla" },
    { to: "/o-nas", label: "O nás" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[80] p-6 md:p-10 flex justify-between items-center transition-all duration-[1000ms] ${showHeader || isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <button onClick={() => setIsMenuOpen(true)} className="group flex items-center space-x-3 md:space-x-4 focus:outline-none z-50">
          <div className="flex flex-col items-start space-y-2 md:space-y-1.5">
            <span className="w-10 h-[2px] md:w-8 md:h-[1.2px] bg-white group-hover:bg-[#dbad1e] transition-all"></span>
            <span className="w-6 h-[2px] md:w-5 md:h-[1.2px] bg-white group-hover:bg-[#dbad1e] transition-all"></span>
          </div>
          <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.4em] opacity-50 group-hover:opacity-100 transition-opacity">MENU</span>
        </button>

        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-700 ${isHome && window.scrollY < 50 ? 'opacity-0' : 'opacity-100'}`}>
          <Link to="/"><img src="/logo.png" alt="BBCars" className="h-6 md:h-7 w-auto object-contain" /></Link>
        </div>

        <button onClick={() => setIsSearchOpen(true)} className="group flex items-center h-12 w-12 md:h-10 md:w-10 justify-center bg-white/0 hover:bg-white/5 rounded-full transition-all z-50">
          <svg className="w-6 h-6 md:w-5 md:h-5 text-white/40 group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <aside className={`fixed top-0 left-0 h-full w-full md:w-[450px] bg-black z-[110] transition-transform duration-700 p-8 md:p-14 flex flex-col border-r border-white/5 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="mb-12 md:mb-10 flex items-center space-x-4 opacity-30 hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
          <span className="text-[10px] md:text-[9px] font-bold uppercase tracking-widest">ZAVŘÍT</span>
        </button>
        <nav className="flex flex-col space-y-6 md:space-y-4 overflow-y-auto pr-4 flex-grow">
          {menuLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-[1.65rem] md:text-2xl font-bold uppercase font-heading hover:text-[#dbad1e] transition-all tracking-tight whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
