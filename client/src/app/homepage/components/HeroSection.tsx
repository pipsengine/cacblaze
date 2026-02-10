import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const HeroSection = () => {
  const categoryPreviews = [
  {
    id: 'hero_guides',
    title: 'Guides',
    count: '2,400+',
    icon: 'BookOpenIcon' as const,
    color: 'bg-blue-50 text-blue-600',
    image: "https://images.unsplash.com/photo-1604882736764-6152df6dc4eb",
    alt: 'Person reading guide book at wooden desk with coffee cup'
  },
  {
    id: 'hero_howto',
    title: 'How-To',
    count: '850+',
    icon: 'WrenchScrewdriverIcon' as const,
    color: 'bg-green-50 text-green-600',
    image: "https://images.unsplash.com/photo-1570175246718-ec2090f75140",
    alt: 'Hands assembling mechanical parts on workbench with tools'
  },
  {
    id: 'hero_reviews',
    title: 'Reviews',
    count: '320+',
    icon: 'StarIcon' as const,
    color: 'bg-amber-50 text-amber-600',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a59bb181-1766478860027.png",
    alt: 'Five star rating display on smartphone screen'
  },
  {
    id: 'hero_education',
    title: 'Education',
    count: '1,100+',
    icon: 'AcademicCapIcon' as const,
    color: 'bg-purple-50 text-purple-600',
    image: "https://images.unsplash.com/photo-1719447001949-a1116c90c5fd",
    alt: 'Student studying with laptop and notebook in modern library'
  }];


  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-xs font-medium text-foreground uppercase tracking-wide">
                10,000+ Articles Live
              </span>
            </div>

            {/* Massive Headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-foreground">
              Knowledge That{' '}
              <span className="gradient-text">Empowers</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl font-medium text-secondary leading-relaxed max-w-lg">
              Human-centered content for the AI era. Discover verified guides, tutorials, and insights across every domain.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/guides"
                className="group px-8 py-4 bg-primary text-white rounded-2xl text-base font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 hover-lift">
                
                <Icon name="BookOpenIcon" size={20} className="text-white" />
                Explore Guides
                <Icon name="ArrowRightIcon" size={16} className="text-white group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/search"
                className="group px-8 py-4 bg-white border-2 border-gray-200 text-foreground rounded-2xl text-base font-semibold hover:border-primary transition-all flex items-center justify-center gap-2 hover-lift">
                
                <Icon name="MagnifyingGlassIcon" size={20} className="text-foreground" />
                Search Content
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) =>
                <div
                  key={`avatar_${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary to-accent" />

                )}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-muted flex items-center justify-center text-xs font-semibold text-foreground">
                  +200
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-warning">
                  {[1, 2, 3, 4, 5].map((i) =>
                  <Icon key={`star_${i}`} name="StarIcon" size={16} className="fill-current text-warning" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Verified by domain experts
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {categoryPreviews.map((category, index) =>
              <Link
                key={category.id}
                href={`/${category.title.toLowerCase()}`}
                className={`group relative overflow-hidden rounded-3xl border border-gray-200 bg-white hover:border-primary transition-all hover-lift ${
                index === 0 ? 'col-span-2 row-span-2' : ''}`
                }
                style={{ minHeight: index === 0 ? '400px' : '200px' }}>
                
                  <AppImage
                  src={category.image}
                  alt={category.alt}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                      <Icon name={category.icon} size={24} />
                    </div>
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-1">{category.title}</h3>
                      <p className="text-white/80 text-sm font-medium">{category.count} Articles</p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;