import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { alternatives } from '@/data/alternatives';

export const metadata: Metadata = {
  title: 'Best Software Alternatives: Top Picks for 2026 - CACBLAZE',
  description: 'Looking for a better, cheaper, or more private alternative to your current software? We compare the best alternatives to Jira, Notion, Photoshop, and more.',
};

export default function AlternativesListingPage() {
  const alternativeList = Object.values(alternatives);
  
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Alternatives', href: '/reviews/alternatives' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Smart Switches
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Best Software Alternatives
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tired of high costs or privacy concerns? We've vetted the best alternatives to the world's most popular apps. Find your next favorite tool today.
              </p>
            </div>
          </div>
        </section>

        {/* Alternatives Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alternativeList.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/reviews/alternatives/${item.slug}`}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.heroImage}
                      alt={`${item.name} vs ${item.targetApp}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-purple-600 uppercase">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs font-bold flex items-center justify-between">
                        <span>Better than {item.targetApp}?</span>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Icon name="StarIcon" size={12} className="fill-current" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-4">
                      {item.name}
                    </h2>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-auto space-y-4">
                      <div className="bg-purple-50 p-4 rounded-2xl">
                        <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1">Key Advantage</p>
                        <p className="text-purple-700 text-sm font-semibold truncate">{item.keyDifferences[0]}</p>
                      </div>
                      <div className="flex items-center text-purple-600 font-bold text-sm group-hover:gap-2 transition-all">
                        Compare with {item.targetApp}
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
