import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TableOfContents from './components/TableOfContents';
import ArticleContent from './components/ArticleContent';
import AuthorBox from './components/AuthorBox';
import FAQSection from './components/FAQSection';
import RelatedContent from './components/RelatedContent';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import CommentsSection from './components/CommentsSection';
import ModerationPanel from './components/ModerationPanel';
import ArticleAnalytics from './components/ArticleAnalytics';
import Breadcrumb from '@/components/common/Breadcrumb';
import ReadingProgressTracker from '@/components/common/ReadingProgressTracker';
import BookmarkButton from '@/components/common/BookmarkButton';
import ShareButton from '@/components/common/ShareButton';
import { getContextualImage, getAuthorAvatar } from '@/utils/imageService';
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/utils/schemaMarkup';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

interface Article {
  id: string;
  slug: string;
  title: string;
  content: string;
  meta_description: string;
  category: string;
  type: string;
  geo_focus: string;
  published_at: string;
  featured_image_url?: string;
  image_alt?: string;
  author?: {
    id: string;
    name: string;
    avatar_url?: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const response = await fetch(`${API_URL}/ai-publishing/articles/slug/${params.slug}`);
    
    if (!response.ok) {
      return {
        title: 'Article Not Found',
      };
    }
    
    const article: Article = await response.json();

    return {
      title: `${article.title} - CACBLAZE`,
      description: article.meta_description || article.content.substring(0, 160),
      keywords: `${article.category}, guide, tutorial, ${article.title}`,
    };
  } catch (error) {
    return {
      title: 'Article Not Found',
    };
  }
}

async function fetchArticle(slug: string): Promise<Article | null> {
  try {
    const response = await fetch(`${API_URL}/ai-publishing/articles/slug/${slug}`);
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await fetchArticle(params.slug);

  if (!article) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Guides', href: '/guides' },
    { name: article.title, href: `/guides/${article.slug}` },
  ];

  const breadcrumbSchemaItems = breadcrumbItems.map((item) => ({
    name: item.name,
    url: `https://cacblaze.com${item.href}`,
  }));

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.excerpt,
    author: article.author,
    publishDate: article.publishDate,
    lastUpdated: article.lastUpdated,
    category: article.category,
    heroImage: article.heroImage,
    heroImageAlt: article.heroImageAlt,
    slug: params.slug,
  });

  const faqSchema = generateFAQSchema(article.faqs || []);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbSchemaItems);
  const jsonLd = [articleSchema, faqSchema, breadcrumbSchema];

  const mappedFaqs = article.faqs.map((faq, index) => ({
    id: `faq-${index}`,
    question: faq.question,
    answer: faq.answer,
  }));

  const heroFallback = getContextualImage({
    category: article.category,
    title: article.title,
    alt: article.heroImageAlt,
    width: 1200,
    height: 630,
    preferCurated: false,
  });

  const authorFallback = getAuthorAvatar(article.author.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <ReadingProgressTracker articleId={article.id} category={article.category} />

      <main className="min-h-screen pt-20 pb-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <Breadcrumb items={breadcrumbItems} className="justify-center mb-8" />

              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Icon name="ClockIcon" size={16} /> {article.readTime} Read
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{article.excerpt}</p>

              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <AppImage
                    src={article.author.image}
                    alt={article.author.imageAlt}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white shadow-sm"
                    fallbackSrc={authorFallback}
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-900 flex items-center gap-1">
                      {article.author.name}
                      {article.author.verified && (
                        <Icon name="CheckBadgeIcon" size={16} className="text-blue-500" />
                      )}
                    </div>
                    <div className="text-sm text-gray-500">Updated {article.lastUpdated}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar (Left) - Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                <TableOfContents items={article.tableOfContents} />
                <div className="mt-8">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                    Share this guide
                  </h3>
                  <div className="flex gap-2">
                    <ShareButton
                      articleId={article.id}
                      articleTitle={article.title}
                      articleUrl={`https://cacblaze.com/guides/${article.slug}`}
                    />
                    <BookmarkButton
                      articleId={article.id}
                      articleTitle={article.title}
                      articleCategory={article.category}
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-6">
              <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
                <AppImage
                  src={article.heroImage}
                  alt={article.heroImageAlt}
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                  priority
                  fallbackSrc={heroFallback.src}
                />
              </div>

              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-10 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <TableOfContents items={article.tableOfContents} />
              </div>

              <ArticleContent sections={article.sections} />

              <div className="my-12 pt-8 border-t border-gray-100">
                <AuthorBox
                  name={article.author.name}
                  role={article.author.title}
                  bio={article.author.bio}
                  expertise={article.author.expertise}
                  articlesCount={article.author.articlesCount}
                  verified={article.author.verified}
                />
              </div>

              <CommentsSection articleId={article.id} />
            </article>

            {/* Sidebar (Right) - Related & Tools */}
            <aside className="lg:col-span-3 space-y-8">
              <div className="sticky top-28">
                {/* Admin/Mod Tools - Only visible to authorized users */}
                <ModerationPanel articleId={article.id} />

                {/* Analytics - Only visible to author/admin */}
                <ArticleAnalytics article={article} />

                <div className="mt-8">
                  <FAQSection faqs={mappedFaqs} />
                </div>

                <div className="mt-8">
                  <RelatedContent category={article.category} currentArticleId={article.id} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
