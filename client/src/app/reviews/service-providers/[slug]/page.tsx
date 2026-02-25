import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { generateReviewSchema } from '@/utils/schemaMarkup';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { serviceProviderReviews } from '@/data/service-providers';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = serviceProviderReviews[slug];

  if (!review) {
    return {
      title: 'Provider Not Found - CACBLAZE',
    };
  }

  return {
    title: `${review.name} Review: Best ${review.category} in Nigeria - CACBLAZE`,
    description: `Expert review of ${review.name}. We analyze speeds, uptime, support, and pricing for this ${review.category} in Nigeria.`,
    alternates: { canonical: `/reviews/service-providers/${review.slug}` },
  };
}

export default async function ServiceProviderReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const review = serviceProviderReviews[slug];

  if (!review) {
    notFound();
  }

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
  const jsonLd = [{ ...reviewLd, url: `${origin}/reviews/service-providers/${review.slug}` }];

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Service Providers', href: '/reviews/service-providers' },
    { name: review.name, href: `/reviews/service-providers/${review.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <Breadcrumb items={breadcrumbItems} className="mb-8" />

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {review.category} Review
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Icon name="CalendarIcon" className="h-4 w-4 mr-1" />
                    {review.publishDate}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {review.name} Review
                </h1>
                <p className="text-xl text-gray-600 mb-6">{review.description}</p>

                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                    <AppImage
                      src={review.author.image}
                      alt={review.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.author.name}</div>
                    <div className="text-sm text-gray-500">{review.author.role}</div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-2xl p-6 lg:p-8 mb-8 border border-indigo-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Our Rating</h3>
                    <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                      <Icon name="StarIcon" className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                      <span className="font-bold text-gray-900">{review.rating}/5.0</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.verdict}</p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden sticky top-24">
                  <div className="aspect-[4/3] relative">
                    <AppImage
                      src={review.heroImage}
                      alt={review.name}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                        Provider Specs
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Icon
                            name="CurrencyDollarIcon"
                            className="h-5 w-5 text-indigo-500 mt-0.5"
                          />
                          <div>
                            <div className="text-sm font-bold text-gray-900">Starting Price</div>
                            <div className="text-sm text-gray-600">{review.specs.basePrice}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="MapPinIcon" className="h-5 w-5 text-indigo-500 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">Coverage</div>
                            <div className="text-sm text-gray-600">{review.specs.coverage}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="UserGroupIcon" className="h-5 w-5 text-indigo-500 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">Support</div>
                            <div className="text-sm text-gray-600">{review.specs.support}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="ClockIcon" className="h-5 w-5 text-indigo-500 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">Response Time</div>
                            <div className="text-sm text-gray-600">{review.specs.responseTime}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {review.specs.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium border border-gray-100"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Icon name="HandThumbUpIcon" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">The Good</h3>
              </div>
              <ul className="space-y-4">
                {review.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3 text-emerald-800">
                    <Icon
                      name="CheckIcon"
                      className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="font-medium">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-50 rounded-3xl p-8 border border-rose-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center">
                  <Icon name="HandThumbDownIcon" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-rose-900">The Bad</h3>
              </div>
              <ul className="space-y-4">
                {review.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3 text-rose-800">
                    <Icon name="XMarkIcon" className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
