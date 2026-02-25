import { Metadata } from 'next';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Icon from '@/components/ui/AppIcon';
import { businessBookReviews } from '@/data/business-books';
import { getCuratedImagesForCategory, getAuthorAvatar } from '@/utils/imageService';

export const metadata: Metadata = {
  title: 'Business Book Reviews: Strategy, Leadership & Startups - CACBLAZE',
  description:
    "In-depth reviews of the world's best business books. From startup manifestos to leadership classics, we break down the key takeaways.",
  alternates: { canonical: '/reviews/business-books' },
};

export default function BusinessBooksListingPage() {
  const reviews = Object.values(businessBookReviews);

  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Business Books', href: '/reviews/business-books' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Category Header */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Business Books
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Read to Lead</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert reviews and key takeaways from the most influential business books ever
                written. Build your mental library.
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
                  href={`/reviews/business-books/${review.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    {(() => {
                      const curated = getCuratedImagesForCategory('reviews');
                      const hash =
                        review.name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0) +
                        review.id.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
                      const idx = curated.length ? hash % curated.length : 0;
                      const fallback = curated[idx]?.src || '/assets/images/no_image.png';
                      const secondary =
                        curated.length > 1
                          ? curated[(idx + 1) % curated.length]?.src ||
                            '/assets/images/no_image.png'
                          : '/assets/images/no_image.png';
                      return (
                        <AppImage
                          src={review.heroImage}
                          alt={review.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          fallbackSrc={fallback}
                          secondaryFallbackSrc={secondary}
                        />
                      );
                    })()}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
                        {review.category}
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
                        {review.pages} Pages
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {review.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-400 mb-3">
                      by {review.author_book}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
                      {review.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-blue-100">
                          <AppImage
                            src={review.author.image}
                            alt={review.author.name}
                            width={32}
                            height={32}
                            className="object-cover w-full h-full"
                            fallbackSrc={getAuthorAvatar(review.author.name)}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-700">
                          {review.author.name}
                        </span>
                      </div>
                      <div className="flex items-center text-blue-600 font-bold text-sm">
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
