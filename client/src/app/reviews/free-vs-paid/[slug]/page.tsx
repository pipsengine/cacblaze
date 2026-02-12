import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { freeVsPaidComparisons } from '@/data/free-vs-paid';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = freeVsPaidComparisons[slug];
  
  if (!comparison) {
    return {
      title: 'Comparison Not Found - CACBLAZE',
    };
  }

  return {
    title: `${comparison.name}: Free vs Paid - Is the Upgrade Worth It? - CACBLAZE`,
    description: `Detailed comparison of ${comparison.name}'s free tier vs paid plans. We analyze features, limitations, and value to help you decide.`,
  };
}

export default async function FreeVsPaidDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = freeVsPaidComparisons[slug];

  if (!comparison) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Free vs Paid', href: '/reviews/free-vs-paid' },
    { name: comparison.name, href: `/reviews/free-vs-paid/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full">
          <Image
            src={comparison.heroImage}
            alt={comparison.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
              <Breadcrumb items={breadcrumbItems} className="mb-6 text-white/80" />
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {comparison.category}
                </span>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
                  <Icon name="StarIcon" size={14} className="text-yellow-400 fill-current" />
                  <span className="font-bold text-sm">{comparison.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {comparison.name}: Free vs Paid Comparison
              </h1>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500">
                  <Image
                    src={comparison.author.image}
                    alt={comparison.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold">{comparison.author.name}</p>
                  <p className="text-sm text-white/70">{comparison.author.role} • {comparison.publishDate}</p>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {comparison.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Free Tier */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-400 shadow-sm">
                          <Icon name="GiftIcon" size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Free Tier</h3>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">What You Get</p>
                          <ul className="space-y-3">
                            {comparison.freeTier.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                                <Icon name="CheckCircleIcon" size={18} className="text-emerald-500 shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">Key Limitations</p>
                          <ul className="space-y-3">
                            {comparison.freeTier.limitations.map((limit, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-500 text-sm italic">
                                <Icon name="XCircleIcon" size={18} className="text-red-400 shrink-0" />
                                {limit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Paid Tier */}
                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                            <Icon name="CreditCardIcon" size={20} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Paid Plan</h3>
                        </div>
                        <span className="text-emerald-700 font-bold text-sm bg-white px-3 py-1 rounded-full shadow-sm">
                          {comparison.paidTier.price}
                        </span>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Premium Features</p>
                          <ul className="space-y-3">
                            {comparison.paidTier.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                                <Icon name="StarIcon" size={18} className="text-emerald-600 fill-current shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Value Add</p>
                          <ul className="space-y-3">
                            {comparison.paidTier.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                                <Icon name="BoltIcon" size={18} className="text-emerald-500 shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verdict Section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white shadow-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
                      <Icon name="TrophyIcon" size={28} />
                    </div>
                    <h2 className="text-3xl font-bold">The Verdict</h2>
                  </div>
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed italic">
                    "{comparison.verdict}"
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Who Should Upgrade?</h3>
                    <p className="text-lg text-white leading-relaxed">
                      {comparison.whoShouldUpgrade}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="sticky top-24 space-y-8">
                  {/* Quick Stats */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Quick Stats</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Category</span>
                        <span className="font-bold text-gray-900">{comparison.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Free Tier</span>
                        <span className="font-bold text-emerald-600">Available</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Paid Starts At</span>
                        <span className="font-bold text-gray-900">{comparison.paidTier.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">CACBLAZE Rating</span>
                        <div className="flex items-center gap-1 text-emerald-600">
                          <Icon name="StarIcon" size={16} className="fill-current" />
                          <span className="font-bold">{comparison.rating}</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full mt-8 bg-emerald-600 text-white font-bold py-4 rounded-2xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                      Check Pricing
                    </button>
                  </div>

                  {/* Share/Newsletter Placeholder */}
                  <div className="bg-emerald-600 rounded-3xl p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">Save Money Every Month</h3>
                    <p className="text-emerald-100 text-sm mb-6 leading-relaxed">
                      Join 50,000+ subscribers getting weekly software value hacks and pricing alerts.
                    </p>
                    <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-emerald-200 outline-none focus:bg-white/20 transition-all"
                      />
                      <button className="w-full bg-white text-emerald-600 font-bold py-3 rounded-xl hover:bg-emerald-50 transition-colors">
                        Join Newsletter
                      </button>
                    </div>
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
