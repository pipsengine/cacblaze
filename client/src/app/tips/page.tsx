import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AppImage from '@/components/ui/AppImage';

export const metadata: Metadata = {
  title: 'Daily Tips Archive - CACBLAZE',
  description: 'Browse previous Daily Tips & Insights across categories.',
};

interface Tip {
  id: string;
  title: string;
  content: string;
  category: string;
  published_at: string;
  featured_image?: string;
  image_alt?: string;
}

async function fetchTips(limit = 60): Promise<Tip[]> {
  try {
    const res = await fetch(`/api/ai-publishing/tips/published?limit=${limit}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      return Array.isArray(data?.tips) ? data.tips : [];
    }
  } catch {}
  return [];
}

export default async function TipsArchivePage() {
  const tips = await fetchTips(60);
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-white">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">Daily Tips Archive</h1>
              <p className="text-muted-foreground mt-2">Browse previous tips by date and category.</p>
            </div>

            {tips.length === 0 ? (
              <div className="rounded-xl border border-gray-200 p-8 text-center">
                <p className="text-gray-600">No tips available yet.</p>
                <Link href="/" className="text-primary font-semibold mt-2 inline-block">
                  Back to Home
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip) => (
                  <div key={tip.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                        {tip.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(tip.published_at).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{tip.title}</h3>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-4 leading-relaxed">{tip.content}</p>
                    {tip.featured_image ? (
                      <div className="relative w-full h-40 overflow-hidden rounded-lg">
                        <AppImage
                          src={tip.featured_image}
                          alt={tip.image_alt || tip.title}
                          className="w-full h-full object-cover"
                          fallbackSrc="/assets/images/no_image.png"
                          secondaryFallbackSrc="/assets/images/no_image.png"
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
