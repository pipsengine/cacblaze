import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { onlineServiceReviews } from '@/data/online-services';

export const metadata: Metadata = {
  title: 'Online Service Reviews | Best Digital Solutions - CACBLAZE',
  description:
    "In-depth reviews of the world's top online services, from streaming and cloud storage to VPNs and productivity tools.",
  alternates: { canonical: '/reviews/online-services' },
};

export default function OnlineServicesListingPage() {
  const reviews = Object.values(onlineServiceReviews);
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Online Services', href: '/reviews/online-services' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Category Hero */}
        <section className="bg-sky-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-sky-200" />
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-sky-500/30">
                  Digital Life & SaaS
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                Online <span className="text-sky-400">Services</span>
              </h1>
              <p className="text-xl text-sky-100/80 leading-relaxed">
                From the tools that power your work to the services that entertain you, we break
                down pricing, privacy, and performance.
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
                  href={`/reviews/online-services/${review.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-sky-300 transition-all hover:shadow-2xl hover:shadow-sky-100 flex flex-col h-full"
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
                    <div className="absolute bottom-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                      <Icon name="StarIcon" size={14} className="fill-current text-yellow-300" />
                      {review.rating}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                      {review.name}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {review.description}
                    </p>

                    <div className="space-y-4 pt-6 border-t border-slate-100">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-medium uppercase tracking-widest">
                          Pricing
                        </span>
                        <span className="text-slate-900 font-bold bg-slate-100 px-2 py-1 rounded">
                          {review.pricing}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-medium uppercase tracking-widest">
                          Best For
                        </span>
                        <span className="text-slate-900 font-bold truncate max-w-[150px]">
                          {review.bestFor}
                        </span>
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
                        <div className="text-sky-600 font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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

        {/* Subscription Tips */}
        <section className="bg-white py-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-sky-50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50" />
              <div className="relative z-10 lg:w-2/3">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Manage your digital subscriptions better
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Learn how to find hidden discounts, manage multiple accounts, and protect your
                  privacy while using global online services.
                </p>
                <Link
                  href="/guides/subscription-management"
                  className="inline-flex items-center gap-2 bg-sky-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-sky-700 transition-all shadow-xl shadow-sky-200 hover:-translate-y-1"
                >
                  Read Guides
                  <Icon name="BookOpenIcon" size={20} />
                </Link>
              </div>
              <div className="lg:w-1/3 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100 aspect-square flex items-center justify-center"
                  >
                    <Icon name="CloudIcon" size={40} className="text-sky-200" />
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
