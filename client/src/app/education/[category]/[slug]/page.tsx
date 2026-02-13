import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { educationHubData } from '@/data/education-hub';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import AppImage from '@/components/ui/AppImage';

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const categoryData = educationHubData[category];
  const resource = categoryData?.resources.find(r => r.slug === slug);

  if (!resource) {
    return {
      title: 'Resource Not Found - CACBLAZE',
    };
  }

  return {
    title: `${resource.name} | ${categoryData.title} - CACBLAZE`,
    description: resource.description,
  };
}

export default async function EducationResourceDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const categoryData = educationHubData[category];
  const resource = categoryData?.resources.find(r => r.slug === slug);

  if (!resource) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Education', href: '/education' },
    { name: categoryData.title, href: `/education/${category}` },
    { name: resource.name, href: `/education/${category}/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Hero Section */}
        <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <AppImage
              src={resource.heroImage}
              alt={resource.name}
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <Breadcrumb items={breadcrumbItems} className="mb-8 justify-center text-slate-400" />
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold uppercase tracking-wider mb-6 backdrop-blur-md border border-blue-500/20">
              {resource.category}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              {resource.name}
            </h1>
            
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                  <AppImage
                    src={resource.author.image}
                    alt={resource.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">{resource.author.name}</p>
                  <p className="text-xs text-slate-400">{resource.author.role}</p>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-left">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Published</p>
                <p className="text-sm font-medium">{resource.publishDate}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-sm border border-slate-100">
              <div className="prose prose-slate prose-lg max-w-none">
                <p className="text-2xl text-slate-600 leading-relaxed mb-12 italic border-l-4 border-blue-500 pl-6">
                  {resource.description}
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-8">What You'll Learn</h2>
                <div className="space-y-12">
                  {resource.content.map((item, index) => {
                    const isStructured = typeof item === 'object' && item !== null && 'title' in item;
                    return (
                      <div key={index} className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-200">
                          {index + 1}
                        </div>
                        {isStructured ? (
                          <>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                              {item.title}
                            </h3>
                            <div className="text-slate-700 text-lg leading-relaxed prose prose-slate max-w-none">
                              {item.body}
                            </div>
                          </>
                        ) : (
                          <span className="text-slate-700 text-lg leading-relaxed">{item}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {resource.tips && resource.tips.length > 0 && (
                  <div className="mt-16 bg-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
                    <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6c0-3.313-2.687-6-6-6s-6 2.687-6 6 2.687 6 6 6zM12 15.75a3 3 0 100-6 3 3 0 000 6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25v1.5m0 16.5v1.5m7.5-9h-1.5m-15 0h-1.5m13.243-6.243l-1.06 1.06m-10.365 10.365l-1.06 1.06m10.365 0l1.06 1.06m-10.365-10.365l1.06-1.06" />
                      </svg>
                      Expert Tips for Success
                    </h3>
                    <div className="grid gap-8">
                      {resource.tips.map((tip, index) => (
                        <div key={index}>
                          <h4 className="font-bold text-blue-900 mb-2">{tip.title}</h4>
                          <p className="text-blue-800 leading-relaxed">{tip.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
