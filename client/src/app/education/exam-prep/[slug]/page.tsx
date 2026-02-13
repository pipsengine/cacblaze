import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { examPrepResources } from '@/data/exam-prep';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = examPrepResources[slug];
  
  if (!resource) return { title: 'Resource Not Found' };

  return {
    title: `${resource.name} | Exam Preparation - CACBLAZE`,
    description: resource.description,
  };
}

export default async function ExamPrepDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = examPrepResources[slug];

  if (!resource) notFound();

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Education', href: '/education' },
    { name: 'Exam Preparation', href: '/education/exam-prep' },
    { name: resource.name, href: `/education/exam-prep/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50">
        {/* Hero Section */}
        <div className="bg-amber-950 py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-amber-400" />
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-widest border border-amber-400/30 shadow-lg">
                    {resource.category}
                  </span>
                  <div className="flex items-center text-yellow-400 font-bold">
                    <Icon name="StarIcon" size={20} className="fill-current" />
                    <span className="ml-2 text-lg">{resource.rating} / 5.0</span>
                  </div>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
                  {resource.name}
                </h1>
                <p className="text-2xl text-amber-100/80 leading-relaxed mb-12 italic border-l-8 border-amber-500 pl-10">
                  "{resource.description}"
                </p>
                
                <div className="flex items-center gap-6 p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-amber-500/50 shadow-inner">
                    <AppImage
                      src={resource.author.image}
                      alt={resource.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-white text-xl">{resource.author.name}</p>
                    <p className="text-amber-400 text-sm font-bold uppercase tracking-widest">{resource.author.role}</p>
                  </div>
                  <div className="ml-auto text-[10px] text-amber-500/60 font-black uppercase tracking-[0.2em] vertical-rl">
                    Updated {resource.publishDate}
                  </div>
                </div>
              </div>

              <div className="relative aspect-square lg:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl ring-2 ring-white/10 group">
                <AppImage
                  src={resource.heroImage}
                  alt={resource.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-20">
                <h2 className="text-4xl font-black text-gray-900 mb-10 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-lg">
                    <Icon name="InformationCircleIcon" size={24} />
                  </span>
                  Key Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {resource.keyInformation.map((info, index) => (
                    <div key={index} className="bg-white p-8 rounded-[2rem] border border-amber-100 shadow-sm flex items-start gap-5 hover:shadow-md transition-all">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                        <Icon name="CheckCircleIcon" size={20} />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">{info}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-10 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-lg">
                    <Icon name="LightBulbIcon" size={24} />
                  </span>
                  Expert Strategies & Tips
                </h2>
                <div className="space-y-8">
                  {resource.tips.map((tip, index) => (
                    <div key={index} className="group bg-white p-10 rounded-[2.5rem] border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:bg-amber-100 transition-colors" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-6 mb-6">
                          <span className="text-5xl font-black text-amber-200 group-hover:text-amber-300 transition-colors">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">{tip.title}</h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed pl-16">
                          {tip.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <div className="bg-amber-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20" />
                <h3 className="text-2xl font-black mb-8 relative z-10">Quick Facts</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between py-4 border-b border-white/10">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Difficulty</span>
                    <span className="font-black text-lg">{resource.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-white/10">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Category</span>
                    <span className="font-black text-lg">{resource.category}</span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-white/10">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">User Rating</span>
                    <div className="flex items-center gap-2">
                      <Icon name="StarIcon" size={16} className="text-yellow-400 fill-current" />
                      <span className="font-black text-lg">{resource.rating} / 5.0</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-10 py-5 bg-amber-500 hover:bg-amber-400 text-white font-black rounded-2xl transition-all shadow-lg hover:shadow-amber-500/25 uppercase tracking-widest text-sm">
                  Download Study Plan
                </button>
              </div>

              <div className="bg-white rounded-[3rem] p-10 border border-amber-100 shadow-sm">
                <h3 className="text-2xl font-black text-gray-900 mb-8">Related Exams</h3>
                <div className="space-y-6">
                  {Object.values(examPrepResources)
                    .filter(r => r.id !== resource.id)
                    .slice(0, 3)
                    .map(related => (
                      <a 
                        key={related.id} 
                        href={`/education/exam-prep/${related.slug}`}
                        className="flex items-center gap-5 group"
                      >
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-amber-50">
                          <AppImage
                            src={related.heroImage}
                            alt={related.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-1">{related.name}</h4>
                          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">{related.category}</p>
                        </div>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
