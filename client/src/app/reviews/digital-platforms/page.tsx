import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { digitalPlatformReviews } from '@/data/digital-platforms';

export const metadata: Metadata = {
  title: 'Digital Platform Reviews | Economy & Social - CACBLAZE',
  description:
    "Analysis of the world's most influential digital platforms, from e-commerce giants to social media and payment systems.",
};

export default function DigitalPlatformsListingPage() {
  const reviews = Object.values(digitalPlatformReviews);
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Digital Platforms', href: '/reviews/digital-platforms' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Category Hero */}
        <section className="bg-violet-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-violet-200" />
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-violet-500/20 text-violet-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-violet-500/30">
                  Economy & Social
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                Digital <span className="text-violet-400">Platforms</span>
              </h1>
              <p className="text-xl text-violet-100/80 leading-relaxed">
                We analyze the giants that shape our economy, social interactions, and digital
                lives. In-depth looks at scale, impact, and value.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Link
                  key={review.id}
                  href={`/reviews/digital-platforms/${review.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-violet-300 transition-all hover:shadow-2xl hover:shadow-violet-100 flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <AppImage
                      src={review.heroImage}
                      alt={review.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
                        {review.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                      <Icon name="StarIcon" size={14} className="fill-current text-yellow-300" />
                      {review.rating}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">
                      {review.name}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {review.description}
                    </p>

                    <div className="space-y-4 pt-6 border-t border-slate-100">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-medium uppercase tracking-widest">
                          Revenue Model
                        </span>
                        <span className="text-slate-900 font-bold truncate max-w-[150px]">
                          {review.revenueModel}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-medium uppercase tracking-widest">
                          Market Share
                        </span>
                        <span className="text-slate-900 font-bold">{review.marketShare}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative w-6 h-6 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                            <AppImage
                              src={review.author.image}
                              alt={review.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs text-slate-500 font-medium">
                            {review.author.name}
                          </span>
                        </div>
                        <div className="text-violet-600 font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read Review
                          <Icon name="ArrowRightIcon" size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Strategy CTA */}
        <section className="bg-white py-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-violet-50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-50" />
              <div className="relative z-10 lg:w-2/3">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Understand Platform Economics
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Discover how network effects, winner-take-all markets, and digital moats define
                  the success of today's tech giants.
                </p>
                <Link
                  href="/guides/platform-economics"
                  className="inline-flex items-center gap-2 bg-violet-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-violet-700 transition-all shadow-xl shadow-violet-200 hover:-translate-y-1"
                >
                  Explore Guides
                  <Icon name="LightBulbIcon" size={20} />
                </Link>
              </div>
              <div className="lg:w-1/3 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-violet-100 aspect-square flex items-center justify-center"
                  >
                    <Icon name="ChartBarIcon" size={40} className="text-violet-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
