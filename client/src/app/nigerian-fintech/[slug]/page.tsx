import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { nigerianFintechData } from '@/data/nigerian-fintech';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const fintech = nigerianFintechData[slug];
  
  if (!fintech) {
    return {
      title: 'Fintech Not Found - CACBLAZE',
    };
  }

  return {
    title: `${fintech.name} Review: Is it the Best ${fintech.category} in Nigeria? - CACBLAZE`,
    description: `Comprehensive expert review of ${fintech.name}. We analyze their ${fintech.category} services, valuation, security, and products for the Nigerian market.`,
  };
}

const FintechDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const fintech = nigerianFintechData[slug];

  if (!fintech) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Nigerian Fintech', href: '/nigerian-fintech' },
    { name: fintech.name, href: `/nigerian-fintech/${fintech.slug}` }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Section */}
          <div className="mt-8 mb-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                    {fintech.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Icon name="Star" className="w-5 h-5 fill-current" />
                    <span className="ml-1 font-bold text-gray-900">{fintech.rating}/5.0</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                  {fintech.name} Review
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {fintech.description}
                </p>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <AppImage
                      src={fintech.author.image}
                      alt={fintech.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold">{fintech.author.name}</div>
                    <div className="text-gray-500 text-sm">{fintech.author.role} • {fintech.publishDate}</div>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <AppImage
                  src={fintech.heroImage}
                  alt={`${fintech.name} workspace`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Quick Specs */}
              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Info" className="w-6 h-6 mr-2 text-blue-600" />
                  Key Information
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-gray-400 text-sm uppercase font-bold mb-1">Founded</div>
                    <div className="text-gray-900 font-medium">{fintech.founded}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm uppercase font-bold mb-1">Headquarters</div>
                    <div className="text-gray-900 font-medium">{fintech.headquarters}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm uppercase font-bold mb-1">Valuation</div>
                    <div className="text-gray-900 font-medium">{fintech.specs.valuation}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm uppercase font-bold mb-1">Regulatory Reach</div>
                    <div className="text-gray-900 font-medium">{fintech.specs.reach}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm uppercase font-bold mb-1">License Type</div>
                    <div className="text-gray-900 font-medium">{fintech.specs.license}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm uppercase font-bold mb-1">API Access</div>
                    <div className="text-gray-900 font-medium">{fintech.specs.apiAvailable ? 'Available' : 'Limited/Private'}</div>
                  </div>
                </div>
              </section>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center">
                    <Icon name="CheckCircle" className="w-6 h-6 mr-2" />
                    What We Like
                  </h3>
                  <ul className="space-y-4">
                    {fintech.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-green-800">
                        <Icon name="Plus" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                  <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center">
                    <Icon name="XCircle" className="w-6 h-6 mr-2" />
                    Areas for Improvement
                  </h3>
                  <ul className="space-y-4">
                    {fintech.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-red-800">
                        <Icon name="Minus" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verdict */}
              <section className="bg-blue-900 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
                <Icon name="Quote" className="absolute top-6 right-8 w-24 h-24 text-blue-800/50" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-black mb-6">The Expert Verdict</h2>
                  <p className="text-xl text-blue-100 leading-relaxed font-medium italic">
                    "{fintech.verdict}"
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Products List */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Products</h3>
                <div className="space-y-4">
                  {fintech.specs.keyProducts.map((product, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl group hover:bg-blue-50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-blue-600 font-bold mr-4">
                        {idx + 1}
                      </div>
                      <span className="font-bold text-gray-700 group-hover:text-blue-700">{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4">Compare Fintechs</h3>
                <p className="text-blue-100 mb-6">See how {fintech.name} stacks up against other Nigerian fintech giants.</p>
                <Link 
                  href="/nigerian-fintech"
                  className="inline-flex items-center justify-center w-full py-4 bg-white text-blue-600 font-black rounded-xl hover:bg-blue-50 transition-colors"
                >
                  View All Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FintechDetailPage;
