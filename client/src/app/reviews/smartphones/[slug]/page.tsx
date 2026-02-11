import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { smartphoneReviews } from '@/data/smartphones';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = smartphoneReviews[slug];
  
  if (!review) {
    return {
      title: 'Review Not Found - CACBLAZE',
    };
  }

  return {
    title: `${review.name} Review: Is it Worth ₦${review.price.split(' ')[0]}? - CACBLAZE`,
    description: `${review.tagline}. Read our in-depth review of the ${review.name} covering battery life, camera performance, and value for money in Nigeria.`,
  };
}

export default async function SmartphoneReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const review = smartphoneReviews[slug];

  if (!review) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Smartphones', href: '/reviews/smartphones' },
    { name: review.name, href: `/reviews/smartphones/${review.slug}` }
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
              {/* Left Column: Header & Verdict */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Smartphone Review
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Icon name="CalendarIcon" className="h-4 w-4 mr-1" />
                    {review.publishDate}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {review.name} Review
                </h1>
                <p className="text-xl text-gray-600 mb-6 font-medium">
                  {review.tagline}
                </p>

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
                  <p className="text-gray-700 leading-relaxed">
                    {review.verdict}
                  </p>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] lg:aspect-square relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <AppImage
                    src={review.heroImage}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur text-white px-4 py-2 rounded-lg font-bold">
                    {review.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
                  <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center">
                    <Icon name="HandThumbUpIcon" className="h-5 w-5 mr-2" />
                    The Good
                  </h3>
                  <ul className="space-y-3">
                    {review.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <Icon name="CheckIcon" className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
                  <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center">
                    <Icon name="HandThumbDownIcon" className="h-5 w-5 mr-2" />
                    The Bad
                  </h3>
                  <ul className="space-y-3">
                    {review.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <Icon name="XMarkIcon" className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Review Body */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
                <div className="prose prose-indigo max-w-none">
                  {review.content.map((section, idx) => (
                    <div key={idx} className="mb-8 last:mb-0">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {review.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <AppImage
                      src={img}
                      alt={`${review.name} gallery image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar: Specs */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900">Tech Specs</h3>
                </div>
                <div className="p-6 space-y-4">
                  {Object.entries(review.specs).map(([key, value]) => (
                    <div key={key} className="pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-sm font-medium text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <a 
                    href="#" 
                    className="block w-full text-center bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
                  >
                    Check Price on Jumia
                  </a>
                  <p className="text-xs text-center text-gray-500 mt-3">
                    *Prices may vary by vendor and location.
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
