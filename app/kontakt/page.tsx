
import Contact from '@/pages/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontaktujte nás',
  description: 'Showroom Rokycany. Jsme vám k dispozici pro osobní schůzky i technické dotazy.',
};

export default function ContactPage() {
  return <Contact lang="CZ" />;
}
