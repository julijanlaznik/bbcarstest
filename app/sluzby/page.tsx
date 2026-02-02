
import Services from '@/pages/Services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naše služby',
  description: 'Komplexní služby pro majitele luxusních vozů: financování, pojištění, dovoz a odtah.',
};

export default function ServicesPage() {
  return <Services lang="CZ" />;
}
