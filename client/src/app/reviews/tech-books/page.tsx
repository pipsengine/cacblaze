import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { techBookReviews } from '@/data/tech-books';

export const metadata: Metadata = {
  title: 'Tech Book Reviews: Programming, Architecture & Cloud - CACBLAZE',
  description:
    'Unbiased reviews of the most important technical books for developers, architects, and data scientists.',
};

export default function TechBooksListingPage() {
  const reviews = Object.values(techBookReviews);

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Tech Books', href: '/reviews/tech-books' },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-100 text-emerald-700';
      case 'Intermediate':
        return 'bg-amber-100 text-amber-700';
      case 'Advanced':
        return 'bg-rose-100 text-rose-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Category Header */}
        <section className="py-16 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6 text-slate-400" />
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold uppercase tracking-wide mb-4 border border-indigo-500/30">
                Engineering Library
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Code Better.</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Deep dives into the technical manuals, architectural guides, and engineering
                manifestos that define the industry.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Link
                  key={review.id}
                  href={`/reviews/tech-books/${review.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={review.heroImage}
                      alt={review.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm border border-white/10">
                        {review.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-yellow-500">
                        <Icon name="StarIcon" size={16} className="fill-current" />
                        <span className="ml-1 text-sm font-bold text-slate-900">
                          {review.rating}
                        </span>
                      </div>
                      <span className="text-slate-200">|</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter ${getDifficultyColor(review.difficulty)}`}
                      >
                        {review.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                      {review.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-400 mb-3">
                      by {review.author_book}
                    </p>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-6 flex-grow italic leading-relaxed">
                      "{review.description}"
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-100">
                          <Image
                            src={review.author.image}
                            alt={review.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs font-medium text-slate-700">
                          {review.author.name}
                        </span>
                      </div>
                      <div className="flex items-center text-indigo-600 font-bold text-sm">
                        View Specs
                        <Icon
                          name="CommandLineIcon"
                          size={16}
                          className="ml-1.5 group-hover:translate-x-0.5 transition-transform"
                        />
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
