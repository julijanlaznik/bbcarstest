
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useParams, useNavigate, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CarDetail from './pages/CarDetail';
import CustomOrder from './pages/CustomOrder';
import Buyout from './pages/Buyout';
import Services from './pages/Services';
import Rent from './pages/Rent';
import Contact from './pages/Contact';
import Inventory from './pages/Inventory';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Journal from './pages/Journal';
import ArticleDetail from './pages/ArticleDetail';
import Footer from './components/Footer';
import EngagementPopup from './components/EngagementPopup';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import { Language } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const SEOManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    let title = "B&b Cars | Prodej luxusních a prémiových vozů";
    if (pathname.includes('nabidka')) title = "Nabídka vozů | B&b Cars";
    if (pathname.includes('kontakt')) title = "Kontakt | B&b Cars";
    document.title = title;
  }, [pathname]);
  return null;
};

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white selection:bg-[#dbad1e] selection:text-black">
      <SEOManager />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home lang="CZ" />} />
          <Route path="/nabidka" element={<Inventory lang="CZ" />} />
          <Route path="/auto/:id" element={<CarDetail lang="CZ" />} />
          <Route path="/journal" element={<Journal lang="CZ" />} />
          <Route path="/journal/:id" element={<ArticleDetail lang="CZ" />} />
          <Route path="/o-nas" element={<AboutUs lang="CZ" />} />
          <Route path="/kontakt" element={<Contact lang="CZ" />} />
          <Route path="/vuz-na-prani" element={<CustomOrder lang="CZ" />} />
          <Route path="/vykup" element={<Buyout lang="CZ" />} />
          <Route path="/sluzby" element={<Services lang="CZ" />} />
          <Route path="/pujcovna" element={<Rent lang="CZ" />} />
          <Route path="/podminky" element={<Terms lang="CZ" />} />
          <Route path="/soukromi" element={<Privacy lang="CZ" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer lang="CZ" />
      <WhatsAppButton />
      <EngagementPopup />
    </div>
  );
};

const App: React.FC = () => (
  <HashRouter>
    <ScrollToTop />
    <Layout />
  </HashRouter>
);

export default App;
