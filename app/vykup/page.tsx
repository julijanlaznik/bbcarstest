
import Buyout from '@/pages/Buyout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Výkup vozů',
  description: 'Rychlý a transparentní výkup vašeho luxusního vozu za nejlepší tržní cenu.',
};

export default function BuyoutPage() {
  return <Buyout lang="CZ" />;
}
