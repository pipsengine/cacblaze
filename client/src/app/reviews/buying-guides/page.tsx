import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { buyingGuides } from '@/data/buying-guides';

export const metadata: Metadata = {
  title: 'Tech Buying Guides for Nigerians (2026) - CACBLAZE',
  description: 'Expert advice on the best tech to buy in Nigeria. From laptops for students to power stations, we help you make the right choice for your budget.',
  keywords: 'buying guides nigeria, best laptops for students nigeria, phone buying guide, power station guide nigeria, slot price list'
};

export default function BuyingGuidesListingPage() {
  const guides = Object.values(buyingGuides);

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Buying Guides', href: '/reviews/buying-guides' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Buying Guides</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Don't waste your hard-earned money. Our expert guides help you navigate the complex Nigerian tech market with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link 
                key={guide.id}
                href={`/reviews/buying-guides/${guide.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <AppImage 
                    src={guide.heroImage} 
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {guide.category}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-xs text-gray-500 mb-3 flex items-center">
                    <Icon name="CalendarIcon" className="h-4 w-4 mr-1" />
                    Updated: {guide.lastUpdated}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {guide.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden">
                        <AppImage src={guide.author.image} alt={guide.author.name} fill className="object-cover" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">{guide.author.name}</span>
                    </div>
                    <span className="text-indigo-600 font-bold text-sm flex items-center">
                      Read Guide <Icon name="ArrowRightIcon" className="h-4 w-4 ml-1" />
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
