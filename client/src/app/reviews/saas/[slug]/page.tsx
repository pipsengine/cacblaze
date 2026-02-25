import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { generateReviewSchema } from '@/utils/schemaMarkup';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { saasReviews } from '@/data/saas';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = saasReviews[slug];

  if (!review) return { title: 'Review Not Found' };

  return {
    title: `${review.name} Review | SaaS Analysis - CACBLAZE`,
    description: review.description,
    alternates: { canonical: `/reviews/saas/${review.slug}` },
  };
}

export default async function SaaSDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const review = saasReviews[slug];

  if (!review) notFound();

  const h = await headers();
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'cacblaze.com';
  const origin = `${proto}://${host}`;
  const reviewLd = generateReviewSchema({
    itemName: review.name,
    rating: review.rating,
    reviewBody: review.verdict,
    author: review.author.name,
    datePublished: review.publishDate,
  });
  const jsonLd = [{ ...reviewLd, url: `${origin}/reviews/saas/${slug}` }];

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'SaaS', href: '/reviews/saas' },
    { name: review.name, href: `/reviews/saas/${slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Hero Section */}
        <div className="bg-slate-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:30px_30px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-sky-400" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-sky-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {review.category}
                  </span>
                  <div className="flex items-center text-yellow-400 font-bold">
                    <Icon name="StarIcon" size={20} className="fill-current" />
                    <span className="ml-2 text-lg">{review.rating} / 5.0</span>
                  </div>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
                  {review.name}
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-10 border-l-4 border-sky-500 pl-8">
                  {review.description}
                </p>

                <div className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-sky-500/50">
                    <AppImage
                      src={review.author.image}
                      alt={review.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{review.author.name}</p>
                    <p className="text-sky-400 text-sm font-medium">{review.author.role}</p>
                  </div>
                  <div className="ml-auto text-xs text-slate-500 font-bold uppercase tracking-widest">
                    Updated {review.publishDate}
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/20">
                <AppImage
                  src={review.heroImage}
                  alt={review.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-20 pb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Verdict Card */}
              <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600">
                    <Icon name="LightBulbIcon" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Expert Verdict</h2>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed italic mb-8">
                  "{review.verdict}"
                </p>
                <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                  <p className="font-bold text-sky-900 mb-2 uppercase tracking-widest text-xs">
                    Best For
                  </p>
                  <p className="text-sky-800 text-lg">{review.bestFor}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Icon name="CpuChipIcon" className="text-sky-500" />
                  Core Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {review.keyFeatures.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-sky-400" />
                      <span className="font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-emerald-50 rounded-[2.5rem] p-10 border border-emerald-100">
                  <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
                    <Icon name="HandThumbUpIcon" className="text-emerald-500" />
                    Advantages
                  </h3>
                  <ul className="space-y-4">
                    {review.pros.map((pro, i) => (
                      <li key={i} className="flex gap-3 text-emerald-800 leading-snug">
                        <Icon
                          name="CheckIcon"
                          size={18}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 rounded-[2.5rem] p-10 border border-rose-100">
                  <h3 className="text-xl font-bold text-rose-900 mb-6 flex items-center gap-3">
                    <Icon name="HandThumbDownIcon" className="text-rose-500" />
                    Drawbacks
                  </h3>
                  <ul className="space-y-4">
                    {review.cons.map((con, i) => (
                      <li key={i} className="flex gap-3 text-rose-800 leading-snug">
                        <Icon
                          name="XMarkIcon"
                          size={18}
                          className="text-rose-500 shrink-0 mt-0.5"
                        />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Specs */}
            <div className="space-y-8">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 sticky top-28">
                <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                  Platform Specs
                </h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Pricing Model
                    </p>
                    <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Icon name="TagIcon" size={18} className="text-sky-500" />
                      {review.pricingModel}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Price Range
                    </p>
                    <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Icon name="CurrencyDollarIcon" size={18} className="text-sky-500" />
                      {review.priceRange}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Deployment
                    </p>
                    <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Icon name="CloudIcon" size={18} className="text-sky-500" />
                      {review.deployment}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Free Plan Available
                    </p>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          review.freePlan
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-rose-100 text-rose-700'
                        }`}
                      >
                        {review.freePlan ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button className="w-full bg-sky-600 text-white font-bold py-4 rounded-2xl hover:bg-sky-700 transition-all shadow-lg shadow-sky-100 flex items-center justify-center gap-2">
                    Visit Official Site
                    <Icon name="ArrowTopRightOnSquareIcon" size={18} />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest font-bold">
                    Enterprise verified partner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
