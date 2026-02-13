import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AMASessionDetail from '../components/AMASessionDetail';

export const metadata: Metadata = {
  title: 'AMA Session - CACBLAZE',
  description: 'Join the live AMA session',
};

export default async function AMASessionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <AMASessionDetail sessionId={id} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
