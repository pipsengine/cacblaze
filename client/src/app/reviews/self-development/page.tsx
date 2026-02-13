import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { selfDevelopmentReviews } from '@/data/self-development';

export const metadata: Metadata = {
  title: 'Self-Development Reviews: Courses, Tools & Habits - CACBLAZE',
  description:
    'In-depth reviews of the best self-development resources, including courses, productivity tools, and personal growth frameworks.',
};

export default function SelfDevelopmentListingPage() {
  const reviews = Object.values(selfDevelopmentReviews);

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Self-Development', href: '/reviews/self-development' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Category Header */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Self-Development
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Master Your Growth
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert reviews of life-changing courses, productivity apps, and mental frameworks to
                help you reach your full potential.
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
                  href={`/reviews/self-development/${review.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={review.heroImage}
                      alt={review.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
                        {review.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-yellow-500">
                        <Icon name="StarIcon" size={16} className="fill-current" />
                        <span className="ml-1 text-sm font-bold text-gray-900">
                          {review.rating}
                        </span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {review.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {review.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
                      {review.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-orange-100">
                          <Image
                            src={review.author.image}
                            alt={review.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-700">
                          {review.author.name}
                        </span>
                      </div>
                      <div className="flex items-center text-orange-600 font-bold text-sm">
                        Read Review
                        <Icon
                          name="ArrowRightIcon"
                          size={16}
                          className="ml-1 group-hover:translate-x-1 transition-transform"
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
