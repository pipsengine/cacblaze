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
import TopicHubSection from './homepage/components/TopicHubSection';
import NewsletterSection from './homepage/components/NewsletterSection';
import PersonalizedContent from '@/components/common/PersonalizedContent';
import ContinueReading from '@/components/common/ContinueReading';
import { generateFAQSchema } from '@/utils/schemaMarkup';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'CACBLAZE - Knowledge That Empowers',
  description:
    'Human-centered content for the AI era. Discover verified guides, tutorials, and insights across every domain.',
  keywords: 'guides, tutorials, how-to, reviews, education, technology, lifestyle',
  alternates: { canonical: '/' },
};

export default function RootHomepage() {
  const homepageFaqSchema = generateFAQSchema([
    {
      question: 'What kind of content can readers find on CACBLAZE?',
      answer:
        'Readers can explore practical guides, reviews, how-to articles, education support, lifestyle insights, and local resource content.',
    },
    {
      question: 'How often is new content published?',
      answer:
        'Fresh articles and tips are published weekly through the editorial and automated publishing workflow.',
    },
    {
      question: 'Can visitors personalize what they see?',
      answer:
        'Yes. The platform adapts recommendations, continue-reading prompts, and newsletter topics around reader interests and activity.',
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <DomainShowcase />
        <TopicHubSection />
        <DailyTips />
        <FeaturedArticle />
        <ContinueReading />
        <PersonalizedContent />
        <FeaturedGuides />
        <SearchShowcase />
        <NewsletterSection />
        <TrustAuthority />
      </main>
      <Footer />
    </>
  );
}
