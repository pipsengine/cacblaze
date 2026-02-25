import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { accessoryReviews } from '@/data/accessories';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = accessoryReviews[slug];

  if (!review) {
    return {
      title: 'Review Not Found - CACBLAZE',
    };
  }

  return {
    title: `${review.name} Review: Best Price in Nigeria - CACBLAZE`,
    description: `${review.tagline}. Read our comprehensive review of the ${review.name} covering performance, battery life, and connectivity for Nigerian users.`,
  };
}

export default async function AccessoryReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const review = accessoryReviews[slug];

  if (!review) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Accessories', href: '/reviews/accessories' },
    { name: review.name, href: `/reviews/accessories/${review.slug}` },
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
                <p className="text-xl text-gray-600 mb-6 font-medium italic">"{review.tagline}"</p>

                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                    <AppImage
                      src={
                        review.author.image && review.author.image.startsWith('http')
                          ? `/api/image-proxy?url=${encodeURIComponent(review.author.image)}`
                          : review.author.image
                      }
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

              <div className="lg:col-span-5 sticky top-24">
                <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    <AppImage
                      src={
                        review.heroImage && review.heroImage.startsWith('http')
                          ? `/api/image-proxy?url=${encodeURIComponent(review.heroImage)}`
                          : review.heroImage
                      }
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="text-white font-bold mb-4 flex items-center">
                      <Icon name="CpuChipIcon" className="h-5 w-5 mr-2 text-indigo-400" />
                      Technical Specifications
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(review.specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between border-b border-gray-800 pb-2 last:border-0"
                        >
                          <span className="text-gray-400 text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </span>
                          <span className="text-white text-sm font-medium text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                        Estimated Price in Nigeria
                      </div>
                      <div className="text-2xl font-bold text-white">{review.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-indigo max-w-none">
                {review.content.map((section, index) => (
                  <div key={index} className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {review.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-gray-100"
                    >
                      <AppImage
                        src={img && img.startsWith('http') ? `/api/image-proxy?url=${encodeURIComponent(img)}` : img}
                        alt={`${review.name} view ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="space-y-8 sticky top-24">
                {/* Pros & Cons */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <Icon name="CheckCircleIcon" className="h-5 w-5 mr-2 text-green-500" />
                    Pros & Cons
                  </h3>

                  <div className="space-y-4 mb-8">
                    {review.pros.map((pro, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <Icon name="CheckIcon" className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {review.cons.map((con, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <Icon name="XMarkIcon" className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-700">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local Availability */}
                <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Icon name="ShoppingBagIcon" className="h-5 w-5 mr-2" />
                    Where to Buy?
                  </h3>
                  <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                    Available at authorized dealers nationwide including Slot, Pointek, and Jumia.
                    Look out for the official seal to ensure local warranty.
                  </p>
                  <button className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                    Check Best Price
                  </button>
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
