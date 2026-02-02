
import { Metadata } from 'next';
import InventoryContent from '@/components/InventoryContent';

export const metadata: Metadata = {
  title: 'Aktuální nabídka vozů',
  description: 'Prohlédněte si náš kurátorský výběr luxusních a sportovních vozů skladem.',
};

export default function InventoryPage() {
  return <InventoryContent lang="CZ" />;
}
