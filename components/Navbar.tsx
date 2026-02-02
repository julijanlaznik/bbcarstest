
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
        
        {/* Social Links at the bottom of the sidebar */}
        <div className="pt-12 mt-auto flex items-center space-x-8 border-t border-white/5">
          <a href="https://instagram.com/bbcars.eu" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#dbad1e] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://facebook.com/bbcars.eu" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#dbad1e] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
