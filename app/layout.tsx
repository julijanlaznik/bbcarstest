
import React from 'react';
import './globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EngagementPopup from '@/components/EngagementPopup';

export const metadata: Metadata = {
  title: {
    default: 'B&B Cars | Prodej luxusních a prémiových vozů',
    template: '%s | B&B Cars'
  },
  description: 'Specializovaný prodejce luxusních vozů. Kurátorský výběr Porsche, Ferrari, Bentley a dalších v showroomu Rokycany.',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://www.bbcars.cz/',
    siteName: 'B&B Cars',
    images: [{ url: '/logo.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#020202] text-white overflow-x-hidden selection:bg-[#dbad1e] selection:text-black font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer lang="CZ" />
        <WhatsAppButton />
        <EngagementPopup />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "BBCars",
              "url": "https://www.bbcars.cz",
              "logo": "https://www.bbcars.cz/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plzeňská 968",
                "addressLocality": "Rokycany",
                "postalCode": "33701",
                "addressCountry": "CZ"
              },
              "telephone": "+420605034911",
              "priceRange": "$$$$"
            }),
          }}
        />
      </body>
    </html>
  );
}
