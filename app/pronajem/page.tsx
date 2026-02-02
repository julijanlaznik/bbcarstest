
import Rent from '@/pages/Rent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pronájem vozů',
  description: 'Zažijte jízdu v exkluzivním voze. Krátkodobý i dlouhodobý pronájem supersportů.',
};

export default function RentPage() {
  return <Rent lang="CZ" />;
}
