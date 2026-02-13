import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { studyGuides } from '@/data/study-guides';

export const metadata: Metadata = {
  title: 'Comprehensive Study Guides - CACBLAZE',
  description: 'Detailed subject-specific study guides to help you master complex topics and excel in your academics.',
};

export default function StudyGuidesListingPage() {
  const guides = Object.values(studyGuides);
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Education', href: '/education' },
    { name: 'Study Guides', href: '/education/study-guides' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-blue-50/30">
        {/* Hero Header */}
        <section className="bg-blue-900 py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-blue-300" />
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
                Subject Mastery
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight">
                Academic <span className="text-blue-400">Study Guides</span>
              </h1>
              <p className="text-xl text-blue-100/80 leading-relaxed mb-10">
                Deep dive into your subjects with structured notes, summaries, and key concepts designed by expert educators.
              </p>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {guides.map((guide) => (
              <Link 
                key={guide.id}
                href={`/education/study-guides/${guide.slug}`}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-blue-100 flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <AppImage
                    src={guide.heroImage}
                    alt={guide.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-500 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      {guide.subject}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white font-bold">
                        <Icon name="StarIcon" size={16} className="text-yellow-400 fill-current" />
                        <span className="ml-1.5">{guide.rating}</span>
                      </div>
                      <span className="text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider bg-blue-400/20 text-blue-200">
                        {guide.level}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {guide.name}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-8 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-100">
                        <AppImage
                          src={guide.author.image}
                          alt={guide.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{guide.author.name}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon name="ArrowRightIcon" size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
