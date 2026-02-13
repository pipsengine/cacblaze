import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { hotelReviews } from '@/data/hotels';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = hotelReviews[slug];

  if (!review) {
    return {
      title: 'Review Not Found - CACBLAZE',
    };
  }

  return {
    title: `${review.name} Review: Luxury Stay in ${review.location} - CACBLAZE`,
    description: `Read our comprehensive review of ${review.name} in ${review.location}. Covering amenities, pricing, security, and global standards for Nigerian travelers.`,
  };
}

export default async function HotelReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const review = hotelReviews[slug];

  if (!review) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Hotels', href: '/reviews/hotels' },
    { name: review.name, href: `/reviews/hotels/${review.slug}` },
  ];

  return (
    <>
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
                    <h3 className="text-lg font-bold text-gray-900">Our Verdict</h3>
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
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                        Hotel Information
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Icon name="MapPinIcon" className="h-5 w-5 text-indigo-500 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">Address</div>
                            <div className="text-sm text-gray-600">{review.specs.address}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="ClockIcon" className="h-5 w-5 text-indigo-500 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">Check-in / Out</div>
                            <div className="text-sm text-gray-600">
                              {review.specs.checkIn} / {review.specs.checkOut}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="PhoneIcon" className="h-5 w-5 text-indigo-500 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">Contact</div>
                            <div className="text-sm text-gray-600">{review.specs.contact}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="BanknotesIcon" className="h-5 w-5 text-indigo-500 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">Price Range</div>
                            <div className="text-sm text-gray-600 font-medium">
                              {review.priceRange}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                        Key Amenities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {review.specs.amenities.map((amenity, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium border border-gray-100"
                          >
                            {amenity}
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
