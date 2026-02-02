
import React from 'react';
import Journal from '@/pages/Journal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aktuality | Zprávy ze světa BBCars',
  description: 'Přečtěte si nejnovější zprávy, recenze a aktuality z našeho showroomu luxusních vozů.',
};

export default function JournalPage() {
  return <Journal lang="CZ" />;
}
