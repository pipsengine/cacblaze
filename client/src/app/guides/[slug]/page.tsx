import { Metadata } from 'next';
import { headers } from 'next/headers';
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

const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

function titleFromSlug(slug: string) {
  return (slug || '')
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const response = await fetch(`${API_URL}/ai-publishing/articles/slug/${slug}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      const fallbackTitle = titleFromSlug(slug);
      return { title: `${fallbackTitle} - CACBLAZE`, description: `Guide: ${fallbackTitle}` };
    }
    
    const article: Article = await response.json();

    return {
      title: `${article.title} - CACBLAZE`,
      description: article.meta_description || article.content.substring(0, 160),
      keywords: `${article.category}, guide, tutorial, ${article.title}`,
    };
  } catch (error) {
    const fallbackTitle = titleFromSlug(slug);
    return { title: `${fallbackTitle} - CACBLAZE`, description: `Guide: ${fallbackTitle}` };
  }
}

async function fetchArticle(slug: string): Promise<Article | null> {
  try {
    const response = await fetch(`${API_URL}/ai-publishing/articles/slug/${slug}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      const t = titleFromSlug(slug);
      return {
        id: `fallback_${slug}`,
        slug,
        title: t,
        content:
          `## Overview\n` +
          `This guide for ${t} is being prepared. You can bookmark this page and check back soon.\n\n` +
          `## What You Can Expect\n` +
          `- Clear steps and checklists\n- Context for Nigeria and similar markets\n- Safety, costs, and alternatives`,
        meta_description: `Overview and next steps for ${t}.`,
        category: 'Guides',
        type: 'Guide',
        geo_focus: 'Nigeria',
        published_at: new Date().toISOString(),
        featured_image_url: '',
        image_alt: `${t} illustration`,
        author: {
          id: 'cacblaze_editors',
          name: 'CACBLAZE Editors',
          avatar_url: '',
        },
      };
    }
    
    return await response.json();
  } catch (error) {
    const t = titleFromSlug(slug);
    return {
      id: `fallback_${slug}`,
      slug,
      title: t,
      content:
        `## Overview\n` +
        `This guide for ${t} is being prepared. You can bookmark this page and check back soon.\n\n` +
        `## What You Can Expect\n` +
        `- Clear steps and checklists\n- Context for Nigeria and similar markets\n- Safety, costs, and alternatives`,
      meta_description: `Overview and next steps for ${t}.`,
      category: 'Guides',
      type: 'Guide',
      geo_focus: 'Nigeria',
      published_at: new Date().toISOString(),
      featured_image_url: '',
      image_alt: `${t} illustration`,
      author: {
        id: 'cacblaze_editors',
        name: 'CACBLAZE Editors',
        avatar_url: '',
      },
    };
  }
}

function slugify(text: string) {
  return (text || '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .substring(0, 100);
}

function parseMarkdownToSections(markdown: string) {
  const lines = (markdown || '').split('\n');
  const sections: Array<{ id: string; title: string; level: number; content: string }> = [];
  let current: { id: string; title: string; level: number; content: string } | null = null;
  const usedIds = new Set<string>();

  const toHtml = (text: string) => {
    const lines = text.split('\n');
    let html = '';
    let inUL = false;
    let inOL = false;
    const closeLists = () => {
      if (inUL) {
        html += '</ul>';
        inUL = false;
      }
      if (inOL) {
        html += '</ol>';
        inOL = false;
      }
    };
    const fmt = (s: string) =>
      s
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    for (const raw of lines) {
      const line = raw.trim();
      if (!line) {
        closeLists();
        continue;
      }
      if (/^[-*]\s+/.test(line)) {
        if (!inUL) {
          closeLists();
          html += '<ul>';
          inUL = true;
        }
        html += `<li>${fmt(line.replace(/^[-*]\s+/, ''))}</li>`;
        continue;
      }
      if (/^\d+\.\s+/.test(line)) {
        if (!inOL) {
          closeLists();
          html += '<ol>';
          inOL = true;
        }
        html += `<li>${fmt(line.replace(/^\d+\.\s+/, ''))}</li>`;
        continue;
      }
      closeLists();
      html += `<p>${fmt(line)}</p>`;
    }
    closeLists();
    return html || '';
  };

  const uniqueId = (title: string) => {
    let base = slugify(title);
    let id = base;
    let i = 2;
    while (usedIds.has(id)) {
      id = `${base}-${i++}`;
    }
    usedIds.add(id);
    return id;
  };

  const flush = () => {
    if (current) {
      current.content = toHtml(current.content.trim());
      sections.push(current);
      current = null;
    }
  };

  for (const line of lines) {
    if (line.startsWith('## ')) {
      flush();
      const title = line.replace(/^##\s+/, '').trim();
      current = { id: uniqueId(title), title, level: 2, content: '' };
    } else if (line.startsWith('### ')) {
      flush();
      const title = line.replace(/^###\s+/, '').trim();
      current = { id: uniqueId(title), title, level: 3, content: '' };
    } else {
      if (!current) {
        current = { id: uniqueId('introduction'), title: 'Introduction', level: 2, content: '' };
      }
      current.content += line + '\n';
    }
  }
  flush();

  if (sections.length === 0) {
    sections.push({
      id: uniqueId('introduction'),
      title: 'Introduction',
      level: 2,
      content: markdown || '',
    });
  }

  const toc = sections.map((s) => ({ id: s.id, title: s.title, level: s.level }));
  return { sections, toc };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article: any = await fetchArticle(slug);

  if (!article) {
    notFound();
  }

  const wordCount = (article.content || '').split(/\s+/).filter(Boolean).length;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min`;
  const excerpt = article.meta_description || (article.content || '').replace(/\s+/g, ' ').slice(0, 200);
  const { sections, toc } = parseMarkdownToSections(article.content || '');

  article = {
    ...article,
    excerpt,
    publishDate: article.published_at,
    lastUpdated: article.updatedAt || article.updated_at || article.published_at,
    heroImage: article.featured_image_url,
    heroImageAlt: article.image_alt || `${article.title} - illustration`,
    readTime,
    author: {
      name: article.author?.username || article.author?.name || 'AI Publisher',
      title: 'Staff Writer',
      bio: 'Writes practical, context-aware guides for African audiences.',
      expertise: ['Guides', 'How-To'],
      articlesCount: 0,
      verified: true,
      image: article.author?.avatar_url,
      imageAlt: (article.author?.username || article.author?.name || 'Author') + ' avatar',
    },
    sections,
    tableOfContents: toc,
    faqs: Array.isArray(article.faqs) ? article.faqs : [],
  };

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Guides', href: '/guides' },
    { name: article.title, href: `/guides/${article.slug}` },
  ];

  const h = await headers();
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'cacblaze.com';
  const origin = `${proto}://${host}`;

  const breadcrumbSchemaItems = breadcrumbItems.map((item) => ({
    name: item.name,
    url: `${origin}${item.href}`,
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
    slug: slug,
  });

  const faqSchema = generateFAQSchema(article.faqs || []);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbSchemaItems);
  const jsonLd = [articleSchema, faqSchema, breadcrumbSchema];

  const mappedFaqs = (article.faqs || []).map((faq: any, index: number) => ({
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
                      articleUrl={`${origin}/guides/${article.slug}`}
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
