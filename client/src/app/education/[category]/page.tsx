import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { educationHubData } from '@/data/education-hub';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import AppImage from '@/components/ui/AppImage';

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = educationHubData[category];

  if (!data) {
    return {
      title: 'Category Not Found - CACBLAZE',
    };
  }

  return {
    title: `${data.title} - Education Hub | CACBLAZE`,
    description: data.description,
  };
}

export default async function EducationCategoryPage({ params }: Props) {
  const { category } = await params;
  const data = educationHubData[category];

  if (!data) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Education', href: '/education' },
    { name: data.title, href: `/education/${category}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Hero Section */}
        <section className="bg-blue-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-blue-300" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{data.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              {data.description}
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.resources.map((resource) => (
                <Link
                  key={resource.id}
                  href={`/education/${category}/${resource.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <AppImage
                      src={resource.heroImage}
                      alt={resource.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                        {resource.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {resource.name}
                    </h2>
                    <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                      {resource.description}
                    </p>
                    
                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                          <AppImage
                            src={resource.author.image}
                            alt={resource.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{resource.author.name}</span>
                      </div>
                      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{resource.publishDate}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {data.resources.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-500 text-lg">No resources found in this category yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
