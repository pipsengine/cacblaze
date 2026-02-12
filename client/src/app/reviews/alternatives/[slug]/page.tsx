import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { alternatives } from '@/data/alternatives';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = alternatives[slug];
  
  if (!review) {
    return {
      title: 'Alternative Not Found - CACBLAZE',
    };
  }

  return {
    title: `${review.name} vs ${review.targetApp}: Best ${review.category} Alternative in 2026 - CACBLAZE`,
    description: `Is ${review.name} better than ${review.targetApp}? Detailed comparison of features, pricing, pros, and cons to help you make the switch.`,
  };
}

export default async function AlternativeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const review = alternatives[slug];

  if (!review) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Alternatives', href: '/reviews/alternatives' },
    { name: `${review.name} vs ${review.targetApp}`, href: `/reviews/alternatives/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full">
          <Image
            src={review.heroImage}
            alt={`${review.name} vs ${review.targetApp}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
              <Breadcrumb items={breadcrumbItems} className="mb-6 text-white/80" />
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {review.category}
                </span>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
                  <Icon name="StarIcon" size={14} className="text-yellow-400 fill-current" />
                  <span className="font-bold text-sm">{review.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {review.name} vs {review.targetApp}: The Better Alternative?
              </h1>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                  <Image
                    src={review.author.image}
                    alt={review.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold">{review.author.name}</p>
                  <p className="text-sm text-white/70">{review.author.role} • {review.publishDate}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Introduction */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Breakdown</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {review.description}
                  </p>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">Key Differences</h3>
                    <div className="grid gap-4">
                      {review.keyDifferences.map((diff, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                            {idx + 1}
                          </div>
                          <p className="text-gray-700 font-medium">{diff}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comparison Table / Pricing */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <Icon name="ScaleIcon" size={24} className="text-purple-600" />
                    Price Comparison
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{review.targetApp} Cost</p>
                      <p className="text-2xl font-bold text-gray-900">{review.pricingComparison.targetAppPrice}</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-purple-200 bg-purple-50">
                      <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">{review.name} Cost</p>
                      <p className="text-2xl font-bold text-purple-700">{review.pricingComparison.alternativePrice}</p>
                    </div>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                    <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                      <Icon name="CheckCircleIcon" size={24} className="text-emerald-600" />
                      Pros
                    </h3>
                    <ul className="space-y-4">
                      {review.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-emerald-800 text-sm font-medium">
                          <Icon name="PlusIcon" size={16} className="mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                    <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                      <Icon name="XCircleIcon" size={24} className="text-red-600" />
                      Cons
                    </h3>
                    <ul className="space-y-4">
                      {review.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-red-800 text-sm font-medium">
                          <Icon name="MinusIcon" size={16} className="mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Verdict */}
                <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
                  <h2 className="text-3xl font-bold mb-6">Final Verdict</h2>
                  <p className="text-xl text-gray-300 mb-8 italic leading-relaxed">
                    "{review.verdict}"
                  </p>
                  <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-2">Best For</p>
                    <p className="text-lg text-white font-medium">{review.bestFor}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="sticky top-24 space-y-8">
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Switching Guide</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between py-3 border-b border-gray-50">
                        <span className="text-gray-500 text-sm">Target App</span>
                        <span className="font-bold text-gray-900">{review.targetApp}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-50">
                        <span className="text-gray-500 text-sm">Alternative</span>
                        <span className="font-bold text-purple-600">{review.name}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-50">
                        <span className="text-gray-500 text-sm">Ease of Switch</span>
                        <span className="font-bold text-gray-900">High</span>
                      </div>
                    </div>
                    <button className="w-full mt-8 bg-purple-600 text-white font-bold py-4 rounded-2xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 active:scale-95">
                      Visit {review.name}
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">
                    <h3 className="text-xl font-bold mb-4">Find More Alternatives</h3>
                    <p className="text-purple-100 text-sm mb-6 leading-relaxed">
                      We're constantly vetting new tools. Get notified when we find a better alternative to your favorite app.
                    </p>
                    <button className="w-full bg-white text-purple-600 font-bold py-3 rounded-xl hover:bg-purple-50 transition-colors">
                      Join the Waitlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
