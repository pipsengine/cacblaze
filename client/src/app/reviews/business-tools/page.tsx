import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { businessToolReviews } from '@/data/business-tools';

export const metadata: Metadata = {
  title: 'Best Business Tools & Software (2026) - CACBLAZE',
  description: 'Expert reviews of the best business tools, from communication platforms like Slack to CRMs like Salesforce and accounting software like QuickBooks.',
  keywords: 'best business tools, crm reviews, slack review, zoom review, salesforce review, quickbooks review, asana review, shopify review'
};

export default function BusinessToolsListingPage() {
  const reviews = Object.values(businessToolReviews);
  
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Business Tools', href: '/reviews/business-tools' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Best Business Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Scale your business with the right software. From team collaboration and video conferencing to complex CRMs and e-commerce platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Link 
                key={review.id} 
                href={`/reviews/business-tools/${review.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <AppImage 
                    src={review.heroImage} 
                    alt={review.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {review.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="StarIcon" 
                          className={`h-4 w-4 ${i < Math.floor(review.rating) ? 'fill-current' : 'text-gray-200 fill-current'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-400">{review.rating}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {review.name}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {review.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded font-bold uppercase">
                      {review.targetBusinessSize}
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded font-bold uppercase">
                      {review.platform.split(',')[0]}
                    </span>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                        <AppImage src={review.author.image} alt={review.author.name} fill className="object-cover" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.author.name}</span>
                    </div>
                    <span className="text-indigo-600 group-hover:translate-x-1 transition-transform">
                      <Icon name="ArrowRightIcon" className="h-5 w-5" />
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
