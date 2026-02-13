import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { examPrepResources } from '@/data/exam-prep';

export const metadata: Metadata = {
  title: 'Exam Preparation & Study Guides - CACBLAZE',
  description:
    'Comprehensive guides and strategies for JAMB, WAEC, IELTS, GRE, and other major examinations.',
};

export default function ExamPrepListingPage() {
  const resources = Object.values(examPrepResources);
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Education', href: '/education' },
    { name: 'Exam Preparation', href: '/education/exam-prep' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-amber-50/30">
        {/* Hero Header */}
        <section className="bg-amber-900 py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:30px_30px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-8 text-amber-300" />
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 border border-amber-500/30">
                Academic Success
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight">
                Master Your <span className="text-amber-400">Exams</span>
              </h1>
              <p className="text-xl text-amber-100/80 leading-relaxed mb-10">
                Don't just study hard, study smart. Get expert tips, comprehensive guides, and
                proven strategies to ace your national and international examinations.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Icon name="DocumentCheckIcon" size={20} />
                  </div>
                  <span className="text-sm font-semibold">Updated Syllabi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Icon name="UserGroupIcon" size={20} />
                  </div>
                  <span className="text-sm font-semibold">Expert Insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Icon name="LightBulbIcon" size={20} />
                  </div>
                  <span className="text-sm font-semibold">Proven Strategies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                href={`/education/exam-prep/${resource.slug}`}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-amber-100 flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <AppImage
                    src={resource.heroImage}
                    alt={resource.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-amber-950/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-amber-500 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      {resource.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white font-bold">
                        <Icon name="StarIcon" size={16} className="text-yellow-400 fill-current" />
                        <span className="ml-1.5">{resource.rating}</span>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider ${
                          resource.difficulty === 'Standard'
                            ? 'bg-amber-400/20 text-amber-200'
                            : resource.difficulty === 'Challenging'
                              ? 'bg-orange-400/20 text-orange-200'
                              : 'bg-rose-400/20 text-rose-200'
                        }`}
                      >
                        {resource.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-8 flex-grow leading-relaxed text-sm">
                    {resource.description}
                  </p>

                  <div className="pt-6 border-t border-amber-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-100">
                        <AppImage
                          src={resource.author.image}
                          alt={resource.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-gray-900">
                          {resource.author.name}
                        </span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-tighter">
                          {resource.author.role}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                      <Icon name="ArrowRightIcon" size={16} />
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
