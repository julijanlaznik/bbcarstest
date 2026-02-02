
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Language } from '../types';
import { articles } from '../data/articles';

const ArticleDetail: React.FC<{ lang: Language }> = ({ lang }) => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) return <Navigate to="/journal" />;

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-40">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* BACK NAVIGATION */}
        <div className="mb-16">
           <Link to="/journal" className="group flex items-center space-x-3 text-[9px] uppercase tracking-[0.4em] font-bold text-white/30 hover:text-[#dbad1e] transition-all">
             <span className="text-lg leading-none transition-transform group-hover:-translate-x-1">←</span>
             <span>Zpět na aktuality</span>
           </Link>
        </div>

        {/* HEADER AREA - Focused & Centered */}
        <header className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#dbad1e] font-bold">{article.date}</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">{article.author}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase font-heading leading-[1.1] text-white mb-10">
            {article.title}
          </h1>
        </header>

        {/* FEATURED IMAGE - Cinematic Wide */}
        <div className="w-full aspect-[21/9] md:aspect-[25/10] overflow-hidden mb-24 border border-white/5 bg-[#080808]">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-[2s]"
          />
        </div>

        {/* CONTENT AREA - Optimized for Reading */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {/* Lead Paragraph */}
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed border-l-2 border-[#dbad1e] pl-8 italic">
              {article.excerpt}
            </p>
            
            {/* Body Text */}
            <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed space-y-8">
              <p>
                Každý nový model v naší nabídce je výsledkem pečlivého hledání a prověřování. V BBCars věříme, že automobil 
                není jen dopravní prostředek, ale investice do zážitků a precizního inženýrství. V tomto článku se podíváme pod 
                kapotu nejnovějších trendů v našem segmentu, kde se technologie potkává s emocí.
              </p>
              
              <p>
                Při výběru vozů do naší kolekce nehledíme jen na suchá data v technickém průkazu. Hledáme "charakter". 
                Zajímá nás, jak se vůz chová v limitních situacích, jakou péči mu věnoval předchozí majitel a zda jeho 
                konfigurace odpovídá nárokům skutečného sběratele nebo nadšence.
              </p>

              {/* In-content image with caption */}
              <div className="py-12">
                <div className="aspect-video overflow-hidden border border-white/5 mb-4">
                   <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200" alt="Detail vozu" className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 text-center font-medium">Každý detail je prověřen naším týmem specialistů v Rokycanech</p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold uppercase font-heading text-white pt-6 tracking-tight">Standard bez kompromisů</h2>
              <p>
                V rámci našich služeb se zaměřujeme na to, aby každý klient odcházel s pocitem, že našel přesně to, co hledal. 
                Ať už jde o vzácné Porsche v barvě Paint to Sample, nebo o perfektně specifikované SUV pro každodenní užití, 
                náš přístup zůstává stejný. 
              </p>
              
              <p>
                Právě tato kontinuita a důraz na detaily nás odlišuje od běžných prodejců. Neřešíme objemy prodejů, 
                řešíme kvalitu vztahů. Naši klienti se k nám vrací ne proto, že musíme, ale proto, že vědí, že jejich 
                vášeň pro auta sdílíme na stejné úrovni.
              </p>
              
              <div className="h-px w-20 bg-[#dbad1e]/40 my-16 mx-auto"></div>
              
              <h2 className="text-2xl md:text-3xl font-bold uppercase font-heading text-white tracking-tight">Závěrem</h2>
              <p>
                Svět luxusních automobilů se mění, přichází elektrifikace a nové technologie. Ale jedna věc zůstává neměnná – 
                radost z řízení a pocit výjimečnosti, který vám může dát jen stroj postavený bez kompromisů. My v BBCars jsme tu, 
                abychom vám tyto pocity pomohli najít a uchovat.
              </p>
            </div>

            {/* AUTHOR BLOCK & CTA */}
            <div className="mt-24 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white/5 border border-white/10">
                   <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover grayscale" alt="Author" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1 font-bold">Napsal pro Vás</p>
                  <p className="text-lg font-bold font-heading uppercase tracking-tight">{article.author}</p>
                </div>
              </div>

              <Link to="/kontakt" className="luxury-button bg-white text-black hover:bg-[#dbad1e] whitespace-nowrap">
                Konzultovat nákup
              </Link>
            </div>
          </div>
        </div>

        {/* NEXT ARTICLES SUGGESTIONS */}
        <div className="mt-40 pt-20 border-t border-white/5">
           <h4 className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-12 font-bold text-center">Další zajímavé čtení</h4>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {articles.filter(a => a.id !== id).slice(0, 2).map(next => (
                <Link key={next.id} to={`/journal/${next.id}`} className="group block bg-[#080808] p-6 border border-white/5 hover:border-[#dbad1e]/20 transition-all">
                  <p className="text-[8px] uppercase tracking-widest text-[#dbad1e] mb-3 font-bold">{next.date}</p>
                  <h5 className="text-lg font-bold font-heading uppercase group-hover:text-white transition-colors">{next.title}</h5>
                </Link>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ArticleDetail;
