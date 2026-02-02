
import { Metadata } from 'next';
import { cars } from '@/data/cars';
import { notFound } from 'next/navigation';
import CarDetailContent from '@/components/CarDetailContent';

interface Props {
  params: { id: string };
}

// SSG: Next.js vygeneruje tyto stránky jako statické HTML při buildu
export async function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

// SEO: Toto běží na serveru. Vyhledávač dostane hotové tagy.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = cars.find((c) => c.id === params.id);
  if (!car) return { title: 'Vůz nenalezen' };

  return {
    title: `${car.brand} ${car.model}`,
    description: `Detail vozu ${car.brand} ${car.model} (${car.year}). Cena: ${car.price}. Najeto: ${car.km}. Prohlédněte si jej v našem showroomu.`,
    openGraph: {
      title: `${car.brand} ${car.model} | B&b Cars`,
      description: `Exkluzivní nabídka: ${car.brand} ${car.model}.`,
      images: [{ url: car.image }],
    },
  };
}

export default function CarPage({ params }: Props) {
  const car = cars.find((c) => c.id === params.id);
  if (!car) notFound();

  // Předáme data do klientské komponenty, která řeší UI a animace
  return <CarDetailContent car={car} lang="CZ" />;
}
