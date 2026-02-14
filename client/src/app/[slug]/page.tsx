import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { getContentBySlug } from '../../services/contentService';

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const content = await getContentBySlug(slug);

  if (!content) {
    return {
      title: 'Content Not Found - CACBLAZE',
    };
  }

  return {
    title: content.seoTitle ?? content.title,
    description: content.seoDescription ?? content.excerpt ?? undefined,
  };
}

export default async function CanonicalContentPage({ params }: PageProps) {
  const { slug } = params;
  const content = await getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">{content.title}</h1>
          {content.publishedAt && (
            <p className="text-sm text-slate-500 mb-8">
              {new Date(content.publishedAt).toLocaleDateString()}
            </p>
          )}
          <div className="prose prose-slate max-w-none">{content.body}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
