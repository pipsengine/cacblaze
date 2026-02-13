import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { buyingGuides } from '@/data/buying-guides';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = buyingGuides[slug];

  if (!guide) {
    return {
      title: 'Guide Not Found - CACBLAZE',
    };
  }

  return {
    title: `${guide.title} - CACBLAZE`,
    description: guide.description,
  };
}

export default async function BuyingGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = buyingGuides[slug];

  if (!guide) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Buying Guides', href: '/reviews/buying-guides' },
    { name: guide.title, href: `/reviews/buying-guides/${guide.slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
            <Breadcrumb items={breadcrumbItems} className="mb-8 justify-center" />
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              {guide.category} Buying Guide
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
              {guide.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">{guide.description}</p>
            <div className="flex items-center justify-center gap-6 pb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100">
                  <AppImage
                    src={guide.author.image}
                    alt={guide.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">{guide.author.name}</div>
                  <div className="text-xs text-gray-500">{guide.author.role}</div>
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                  Last Updated
                </div>
                <div className="font-bold text-gray-900">{guide.lastUpdated}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              {/* Recommendations */}
              <div className="space-y-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-indigo-600 inline-block">
                  Top Recommendations
                </h2>

                {guide.recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-[4/3] md:aspect-auto">
                        <AppImage
                          src={rec.image}
                          alt={rec.productName}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-6 left-6 bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                          {rec.title}
                        </div>
                      </div>
                      <div className="p-8 lg:p-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{rec.productName}</h3>
                        <div className="text-indigo-600 font-extrabold text-xl mb-6">
                          {rec.priceRange}
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-8">{rec.description}</p>
                        <div className="space-y-3 mb-10">
                          {rec.pros.map((pro, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 text-sm font-medium text-gray-700"
                            >
                              <Icon name="CheckCircleIcon" className="h-5 w-5 text-green-500" />
                              {pro}
                            </div>
                          ))}
                        </div>
                        <Link
                          href={rec.link}
                          className="inline-flex items-center justify-center w-full bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-indigo-600 transition-colors gap-2 group"
                        >
                          View Full Review{' '}
                          <Icon
                            name="ArrowRightIcon"
                            className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tips Section */}
              <div className="mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Essential Buying Tips</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {guide.buyingTips.map((tip, index) => (
                    <div
                      key={index}
                      className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100"
                    >
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <Icon name="LightBulbIcon" className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{tip.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Newsletter/Action Box */}
                <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <h3 className="text-2xl font-bold mb-4 relative">Stay Updated</h3>
                  <p className="text-indigo-100 mb-8 relative">
                    Tech prices in Nigeria change daily. Subscribe to get our weekly price watch and
                    deal alerts.
                  </p>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 mb-4 placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 relative"
                  />
                  <button className="w-full bg-white text-indigo-600 font-extrabold py-4 rounded-2xl hover:bg-indigo-50 transition-colors relative">
                    Subscribe Now
                  </button>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">More Guides</h3>
                  <div className="space-y-4">
                    {['Laptops', 'Smartphones', 'Gadgets', 'Accessories'].map((cat) => (
                      <button
                        key={cat}
                        className="flex items-center justify-between w-full p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                      >
                        <span className="font-semibold text-gray-700 group-hover:text-indigo-600">
                          {cat} Guides
                        </span>
                        <Icon
                          name="ChevronRightIcon"
                          className="h-5 w-5 text-gray-400 group-hover:text-indigo-600"
                        />
                      </button>
                    ))}
                  </div>
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
