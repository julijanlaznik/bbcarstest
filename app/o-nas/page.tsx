
import AboutUs from '@/pages/AboutUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O nás',
  description: 'Příběh BBCars: 15 let zkušeností s prodejem těch nejlepších vozů na trhu.',
};

export default function AboutUsPage() {
  return <AboutUs lang="CZ" />;
}
