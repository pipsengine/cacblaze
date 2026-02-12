import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { freeVsPaidComparisons } from '@/data/free-vs-paid';

export const metadata: Metadata = {
  title: 'Free vs Paid Comparisons: Is it Worth the Upgrade? - CACBLAZE',
  description: 'In-depth comparisons between free and premium versions of popular software and apps. We help you decide when to stick with free and when to pay.',
};

export default function FreeVsPaidListingPage() {
  const comparisons = Object.values(freeVsPaidComparisons);
  
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Free vs Paid', href: '/reviews/free-vs-paid' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Value Analysis
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Free vs Paid: The Ultimate Guide
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop guessing. We break down the real differences between free tiers and premium subscriptions to help you spend your money wisely.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comparisons.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/reviews/free-vs-paid/${item.slug}`}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.heroImage}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-600 uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {item.name}
                      </h2>
                      <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg">
                        <Icon name="StarIcon" size={14} className="text-emerald-600 fill-current" />
                        <span className="text-emerald-700 font-bold text-sm">{item.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-auto space-y-4">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                        <span className="text-gray-400">Paid Plan Starts At:</span>
                        <span className="text-emerald-600">{item.paidTier.price}</span>
                      </div>
                      <div className="h-px bg-gray-100 w-full" />
                      <div className="flex items-center text-emerald-600 font-bold text-sm group-hover:gap-2 transition-all">
                        Read Comparison
                        <Icon name="ChevronRightIcon" size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
