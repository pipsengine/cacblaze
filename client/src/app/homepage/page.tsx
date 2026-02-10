import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/HeroSection';
import DomainShowcase from './components/DomainShowcase';
import FeaturedGuides from './components/FeaturedGuides';
import SearchShowcase from './components/SearchShowcase';
import TrustAuthority from './components/TrustAuthority';
import PersonalizedContent from '@/components/common/PersonalizedContent';
import ContinueReading from '@/components/common/ContinueReading';

export const metadata: Metadata = {
  title: 'CACBLAZE - Knowledge That Empowers',
  description: 'Human-centered content for the AI era. Discover verified guides, tutorials, and insights across every domain.',
  keywords: 'guides, tutorials, how-to, reviews, education, technology, lifestyle',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <DomainShowcase />
        <ContinueReading />
        <PersonalizedContent />
        <FeaturedGuides />
        <SearchShowcase />
        <TrustAuthority />
      </main>
      <Footer />
    </>
  );
}