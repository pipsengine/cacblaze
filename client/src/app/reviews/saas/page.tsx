import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { saasReviews } from '@/data/saas';

export const metadata: Metadata = {
  title: 'SaaS Reviews | Software as a Service Analysis - CACBLAZE',
  description:
    'In-depth reviews and comparisons of the leading SaaS platforms for communication, CRM, DevOps, and more.',
};

export default function SaaSListingPage() {
  const reviews = Object.values(saasReviews);
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'SaaS', href: '/reviews/saas' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Hero Header */}
        <section className="bg-sky-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-sky-200" />
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                Modern <span className="text-sky-400">SaaS</span> Solutions
              </h1>
              <p className="text-xl text-sky-100/80 leading-relaxed mb-8">
                Detailed analysis of the software powering the digital economy. From CRM to DevOps,
                we break down pricing, features, and performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <Icon name="CheckCircleIcon" size={18} className="text-sky-400" />
                  <span className="text-sm font-medium">Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <Icon name="CurrencyDollarIcon" size={18} className="text-sky-400" />
                  <span className="text-sm font-medium">Pricing Analysis</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <Icon name="BoltIcon" size={18} className="text-sky-400" />
                  <span className="text-sm font-medium">Performance Benchmarks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Link
                key={review.id}
                href={`/reviews/saas/${review.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <AppImage
                    src={review.heroImage}
                    alt={review.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sky-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {review.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <Icon name="StarIcon" size={16} className="text-yellow-400 fill-current" />
                    <span className="ml-1.5">{review.rating}</span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {review.name}
                  </h3>
                  <p className="text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {review.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-sky-100">
                        <AppImage
                          src={review.author.image}
                          alt={review.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-500">
                        {review.author.name}
                      </span>
                    </div>
                    <div className="flex items-center text-sky-600 font-bold text-sm">
                      Read Analysis
                      <Icon
                        name="ArrowRightIcon"
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white border-y border-slate-100 py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-sky-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/10 rounded-full -ml-32 -mb-32 blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                  Need a custom SaaS evaluation?
                </h2>
                <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
                  Our experts provide deep-dive technical analysis and ROI projections for
                  enterprise software implementations.
                </p>
                <button className="bg-white text-sky-600 font-bold px-10 py-5 rounded-2xl hover:bg-sky-50 transition-colors shadow-xl text-lg">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
