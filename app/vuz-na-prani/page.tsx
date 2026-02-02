
import CustomOrder from '@/pages/CustomOrder';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vůz na přání',
  description: 'Nenašli jste svůj vysněný vůz? Vyhledáme jej pro vás napříč celou Evropou.',
};

export default function CustomOrderPage() {
  return <CustomOrder lang="CZ" />;
}
