import { Metadata } from 'next';
import NigerianCitiesPage, {
  metadata as localMetadata,
} from '@/app/local-resources/nigerian-cities/page';

export const metadata: Metadata = localMetadata;

export default function Page() {
  return <NigerianCitiesPage />;
}
