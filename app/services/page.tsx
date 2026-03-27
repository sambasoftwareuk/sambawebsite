import type { Metadata } from 'next';
import { ServicesPage } from '../../components/templates/ServicesPage';

export const metadata: Metadata = {
  title: 'Services | Samba Software',
  description: 'Website development, Shopify solutions, and AI automation services for growing businesses.'
};

export default function Page() {
  return <ServicesPage />;
}
