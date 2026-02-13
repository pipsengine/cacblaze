import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { learningAppReviews } from '@/data/learning-apps';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = learningAppReviews[slug];

  if (!review) {
    return {
      title: 'App Not Found - CACBLAZE',
    };
  }

  return {
    title: `${review.name} Review: Best ${review.category} App in 2026 - CACBLAZE`,
    description: `Expert review of ${review.name}. We analyze courses, pricing, interactive features, and certificate availability for this ${review.category} platform.`,
  };
}

export default async function LearningAppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const review = learningAppReviews[slug];

  if (!review) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Learning Apps', href: '/reviews/learning-apps' },
    { name: review.name, href: `/reviews/learning-apps/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />

          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            {/* Hero Section */}
            <div className="relative h-[400px]">
              <AppImage src={review.heroImage} alt={review.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {review.category}
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">
                    <Icon name="StarIcon" className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    {review.rating} / 5.0 Rating
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                  {review.name} Review
                </h1>
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-white/50">
                    <AppImage
                      src={review.author.image}
                      alt={review.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{review.author.name}</p>
                    <p className="text-[10px] text-white/70 uppercase tracking-widest">
                      {review.publishDate} • {review.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-10">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Icon name="DocumentTextIcon" className="h-6 w-6 text-blue-600" />
                      The Overview
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{review.description}</p>
                  </section>

                  <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">
                      Platform Availability
                    </h3>
                    <p className="text-gray-700 font-medium">{review.platform}</p>
                  </section>

                  <section>
                    <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">
                      Subjects Covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {review.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-bold"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </section>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                      <h3 className="text-emerald-900 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                        <Icon name="CheckCircleIcon" className="h-4 w-4" />
                        What We Loved
                      </h3>
                      <ul className="space-y-3">
                        {review.pros.map((pro, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-emerald-800 leading-relaxed"
                          >
                            <span className="text-emerald-500 font-bold">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                      <h3 className="text-rose-900 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                        <Icon name="XCircleIcon" className="h-4 w-4" />
                        Room for Improvement
                      </h3>
                      <ul className="space-y-3">
                        {review.cons.map((con, i) => (
                          <li key={i} className="flex gap-2 text-sm text-rose-800 leading-relaxed">
                            <span className="text-rose-500 font-bold">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <section className="border-t border-gray-100 pt-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Icon name="LightBulbIcon" className="h-6 w-6 text-yellow-500" />
                      Our Verdict
                    </h2>
                    <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl shadow-blue-100">
                      <p className="text-lg italic font-medium leading-relaxed">
                        "{review.verdict}"
                      </p>
                    </div>
                  </section>
                </div>

                {/* Sidebar Specs */}
                <div className="md:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-widest border-b border-gray-50 pb-4">
                        Learning Specs
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-1">
                            Pricing Model
                          </span>
                          <span className="text-xs font-bold text-gray-900">
                            {review.specs.pricingModel}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                            Offline Mode
                          </span>
                          <span
                            className={`text-xs font-bold ${review.specs.offlineMode ? 'text-emerald-600' : 'text-rose-500'}`}
                          >
                            {review.specs.offlineMode ? 'Supported' : 'No'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                            Certificates
                          </span>
                          <span
                            className={`text-xs font-bold ${review.specs.certificateAvailable ? 'text-emerald-600' : 'text-rose-500'}`}
                          >
                            {review.specs.certificateAvailable ? 'Available' : 'None'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                            Interactive
                          </span>
                          <span
                            className={`text-xs font-bold ${review.specs.interactiveLessons ? 'text-emerald-600' : 'text-rose-500'}`}
                          >
                            {review.specs.interactiveLessons ? 'Yes' : 'Video/Text only'}
                          </span>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-50">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
                          Core Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {review.specs.features.map((feature, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                      Start Learning <Icon name="ArrowTopRightOnSquareIcon" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
