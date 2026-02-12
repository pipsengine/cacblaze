import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { laptopReviews } from '@/data/laptops';

export const metadata: Metadata = {
  title: 'Best Laptop Reviews in Nigeria (2026) - CACBLAZE',
  description: 'In-depth reviews and comparisons of the latest laptops available in Nigeria. From MacBook Air to Dell XPS, find the best laptop for your budget and needs.',
  keywords: 'laptop reviews nigeria, macbook price nigeria, dell xps nigeria, hp victus review, best laptops for students nigeria'
};

export default function LaptopsListingPage() {
  const reviews = Object.values(laptopReviews);

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Laptops', href: '/reviews/laptops' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Laptop Reviews</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              We test the latest laptops for performance, battery life, and value in the Nigerian context. Whether you're a student, creator, or professional, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Link 
                key={review.id}
                href={`/reviews/laptops/${review.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
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
                      {review.specs.processor.split(' ')[0]}
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
