import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { getContentBySlug, getMetaBySlug } from '../../services/contentService';
import AppImage from '@/components/ui/AppImage';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getMetaBySlug(slug);

  if (!content) {
    return {
      title: 'Content Not Found - CACBLAZE',
    };
  }

  const isFallback =
    (content as any).category === 'Guides' &&
    (content as any).authorName === 'CACBLAZE Editors';

  return {
    title: content.seoTitle ?? content.title,
    description: content.seoDescription ?? content.excerpt ?? undefined,
    robots: isFallback
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export default async function CanonicalContentPage({ params }: PageProps) {
  const { slug } = await params;
  const content = await getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        <section className="relative py-24 text-white overflow-hidden">
          {content.heroImage ? (
            <>
              <div className="absolute inset-0">
                <AppImage
                  src={content.heroImage}
                  alt={content.title}
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-blue-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-sky-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-20"></div>
              <div className="absolute inset-0 bg-slate-900/80"></div>
            </div>
          )}

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            {content.category && (
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sky-200 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md border border-white/10">
                {content.category}
              </span>
            )}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">{content.title}</h1>
            {content.excerpt && (
              <p className="text-lg text-slate-200 mb-8">
                {content.excerpt}
              </p>
            )}
            <div className="flex items-center gap-4 mb-10">
              <a
                href="#start"
                className="inline-flex items-center px-5 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-sm hover:shadow-lg transition"
              >
                Start Guide
              </a>
              <a
                href="/topics/education"
                className="inline-flex items-center px-5 py-3 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition"
              >
                Browse Topics
              </a>
            </div>
            <div className="flex items-center gap-6 text-slate-200">
              {content.authorImage && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                  <AppImage
                    src={content.authorImage}
                    alt={content.authorName || 'Author'}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                {content.authorName && (
                  <p className="text-sm font-bold">{content.authorName}</p>
                )}
                {content.authorRole && (
                  <p className="text-xs text-slate-300">{content.authorRole}</p>
                )}
              </div>
              {content.publishedAt && (
                <>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div>
                    <p className="text-xs text-slate-300 uppercase tracking-widest font-semibold">
                      Published
                    </p>
                    <p className="text-sm font-medium">
                      {new Date(content.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <section id="start" className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-[2rem] p-8 lg:p-16 shadow-sm border border-slate-100">
              <div className="prose prose-slate prose-lg max-w-none">{content.body}</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
