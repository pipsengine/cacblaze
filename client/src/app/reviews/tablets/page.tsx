import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { tabletReviews } from '@/data/tablets';

export const metadata: Metadata = {
  title: 'Best Tablet Reviews in Nigeria (2026) - CACBLAZE',
  description: 'Comprehensive reviews of the latest tablets in Nigeria. Compare iPad Pro, Galaxy Tab, and more to find the best tablet for drawing, work, or school.',
  keywords: 'tablet reviews nigeria, ipad price nigeria, galaxy tab review, best tablets for students, drawing tablets nigeria'
};

export default function TabletsListingPage() {
  const reviews = Object.values(tabletReviews);

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Tablets', href: '/reviews/tablets' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tablet Reviews</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              From high-end creative tools to affordable student tablets, we review the best slates available in the Nigerian market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Link 
                key={review.id}
                href={`/reviews/tablets/${review.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="aspect-square relative overflow-hidden">
                  <AppImage 
                    src={review.heroImage} 
                    alt={review.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                    {review.rating} / 5.0
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">
                      {review.specs.processor.includes('M4') ? 'Apple M4' : 'Snapdragon'}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{review.publishDate}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {review.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 italic">
                    "{review.tagline}"
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{review.price.split(' ')[0]}</span>
                    <span className="text-indigo-600 font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
                      Read Review <Icon name="ArrowRightIcon" className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
