import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './homepage/components/HeroSection';
import DomainShowcase from './homepage/components/DomainShowcase';
import DailyTips from './homepage/components/DailyTips';
import FeaturedArticle from './homepage/components/FeaturedArticle';
import FeaturedGuides from './homepage/components/FeaturedGuides';
import SearchShowcase from './homepage/components/SearchShowcase';
import TrustAuthority from './homepage/components/TrustAuthority';
import PersonalizedContent from '@/components/common/PersonalizedContent';
import ContinueReading from '@/components/common/ContinueReading';

export const metadata: Metadata = {
  title: 'CACBLAZE - Knowledge That Empowers',
  description:
    'Human-centered content for the AI era. Discover verified guides, tutorials, and insights across every domain.',
  keywords: 'guides, tutorials, how-to, reviews, education, technology, lifestyle',
};

export default function RootHomepage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <DomainShowcase />
        <DailyTips />
        <FeaturedArticle />
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
