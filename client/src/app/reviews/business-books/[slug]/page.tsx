import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { businessBookReviews } from '@/data/business-books';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = businessBookReviews[slug];
  
  if (!review) {
    return {
      title: 'Review Not Found - CACBLAZE',
    };
  }

  return {
    title: `${review.name} Review: Key Takeaways & Verdict - CACBLAZE`,
    description: `Read our in-depth review of ${review.name} by ${review.author_book}. Explore key takeaways, pros, cons, and our final verdict.`,
  };
}

export default async function BusinessBookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const review = businessBookReviews[slug];

  if (!review) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Business Books', href: '/reviews/business-books' },
    { name: review.name, href: `/reviews/business-books/${slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full">
          <Image
            src={review.heroImage}
            alt={review.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
              <Breadcrumb items={breadcrumbItems} className="mb-6 text-white/80" />
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {review.category}
                </span>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/20">
                  <Icon name="StarIcon" size={14} className="text-yellow-400 fill-current" />
                  <span className="font-bold text-sm">{review.rating}</span>
                </div>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                  {review.pages} Pages
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight max-w-4xl">
                {review.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 font-medium">by {review.author_book}</p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src={review.author.image}
                    alt={review.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold">{review.author.name}</p>
                  <p className="text-sm text-white/70">{review.author.role} • {review.publishDate}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Introduction */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Synopsis</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {review.description}
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {review.keyTakeaways.map((takeaway, index) => (
                      <div key={index} className="flex gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 font-medium leading-tight self-center">{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Icon name="CheckCircleIcon" className="text-emerald-500" />
                      Pros
                    </h3>
                    <ul className="space-y-4">
                      {review.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <Icon name="CheckIcon" size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Icon name="XCircleIcon" className="text-red-500" />
                      Cons
                    </h3>
                    <ul className="space-y-4">
                      {review.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <Icon name="XMarkIcon" size={18} className="text-red-500 mt-1 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Verdict */}
                <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Icon name="BookOpenIcon" size={120} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">The Verdict</h3>
                  <p className="text-xl text-blue-100 leading-relaxed mb-8 italic">
                    "{review.verdict}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="StarIcon" size={20} className={i < Math.floor(review.rating) ? 'fill-current' : 'opacity-30'} />
                      ))}
                    </div>
                    <span className="font-bold text-lg">{review.rating} / 5.0</span>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Info Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-28">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Book Details</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Best For</p>
                      <p className="text-gray-700 leading-relaxed">
                        {review.bestFor}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Author</p>
                      <p className="text-gray-900 font-bold">{review.author_book}</p>
                    </div>
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Length</p>
                      <p className="text-gray-900 font-bold">{review.pages} Pages</p>
                    </div>
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Category</p>
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase">
                        {review.category}
                      </span>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mt-4">
                      Get This Book
                      <Icon name="ArrowTopRightOnSquareIcon" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
