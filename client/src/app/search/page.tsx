import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SearchInteractive from './components/SearchInteractive';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Search - CACBLAZE',
  description:
    'Search CACBLAZE guides, tutorials, reviews, and practical resources across our topic library.',
  keywords: 'search, find guides, knowledge search, article search',
  alternates: { canonical: '/search' },
};

export default function SearchPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Suspense fallback={null}>
          <SearchInteractive />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
