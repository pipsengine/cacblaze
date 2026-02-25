import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SearchInteractive from './components/SearchInteractive';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Search - CACBLAZE',
  description:
    'Search 10,000+ verified articles across all domains. Find guides, tutorials, reviews, and resources with our AI-powered search.',
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
