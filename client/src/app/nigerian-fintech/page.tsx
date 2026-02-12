import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { nigerianFintechData } from '@/data/nigerian-fintech';

export const metadata: Metadata = {
  title: 'Nigerian Fintech Reviews: Best Companies & Services 2026 - CACBLAZE',
  description: 'Expert reviews of Nigeria\'s top fintech companies including Flutterwave, Paystack, Interswitch, and more. We analyze their impact, services, and reliability.',
  keywords: 'Nigerian fintech, Flutterwave review, Paystack, Interswitch, Paga, fintech companies Nigeria, payment gateways Nigeria'
};

const NigerianFintechListingPage = () => {
  const fintechs = Object.values(nigerianFintechData);
  
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Nigerian Fintech', href: '/nigerian-fintech' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          
          <header className="mb-12 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nigerian Fintech Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              In-depth analysis of the companies driving Nigeria's financial revolution. From payment gateways to wealth management, we review the best in the business.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fintechs.map((fintech) => (
              <Link 
                key={fintech.id}
                href={`/nigerian-fintech/${fintech.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <AppImage
                    src={fintech.heroImage}
                    alt={fintech.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-blue-600 flex items-center shadow-sm">
                    <Icon name="Star" className="w-4 h-4 mr-1 fill-current" />
                    {fintech.rating}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white text-sm font-medium px-2 py-1 bg-blue-600/80 rounded">
                      {fintech.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {fintech.name}
                  </h2>
                  <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">
                    {fintech.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {fintech.specs.keyProducts.slice(0, 3).map((product, idx) => (
                      <span key={idx} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {product}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2 border border-gray-200">
                        <AppImage
                          src={fintech.author.image}
                          alt={fintech.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{fintech.author.name}</span>
                    </div>
                    <span className="text-blue-600 font-bold text-sm group-hover:translate-x-1 transition-transform flex items-center">
                      Read Review <Icon name="ArrowRight" className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NigerianFintechListingPage;
