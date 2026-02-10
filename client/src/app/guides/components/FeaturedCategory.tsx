import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const FeaturedCategory = () => {
  const featuredGuide = {
    id: 'featured_1',
    title: 'Complete Guide to Machine Learning in 2026',
    excerpt: 'Everything you need to know about machine learning, from fundamentals to advanced techniques. Updated with the latest frameworks and best practices.',
    category: 'Technology',
    readTime: '25 min',
    author: 'Dr. Emily Watson',
    rating: 5.0,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_113c8f6f0-1764648553585.png",
    imageAlt: 'Digital visualization of machine learning neural network with glowing connections',
    href: '/guides/machine-learning-2026'
  };

  const relatedGuides = [
  {
    id: 'related_1',
    title: 'Python for Machine Learning',
    readTime: '12 min',
    image: "https://images.unsplash.com/photo-1693106603969-a6116a49b6e9",
    imageAlt: 'Python code on computer screen showing machine learning libraries'
  },
  {
    id: 'related_2',
    title: 'Deep Learning Fundamentals',
    readTime: '18 min',
    image: "https://images.unsplash.com/photo-1719650592946-55163c4994cb",
    imageAlt: 'Abstract representation of neural network layers with blue lights'
  },
  {
    id: 'related_3',
    title: 'AI Model Deployment',
    readTime: '15 min',
    image: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a",
    imageAlt: 'Server room with glowing blue network cables and equipment'
  }];


  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
            Featured Category
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Machine Learning Deep Dive
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured Guide */}
          <Link
            href={featuredGuide?.href}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-gray-200 bg-white hover:border-primary transition-all hover-lift">
            
            <div className="relative h-96">
              <AppImage
                src={featuredGuide?.image}
                alt={featuredGuide?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block w-max px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground mb-4">
                  {featuredGuide?.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {featuredGuide?.title}
                </h3>
                <p className="text-white/90 text-base mb-4 line-clamp-2">
                  {featuredGuide?.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-white/80 text-sm">{featuredGuide?.author}</span>
                  <span className="text-white/60">•</span>
                  <span className="text-white/80 text-sm">{featuredGuide?.readTime}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Icon name="StarIcon" size={16} className="text-warning fill-current" />
                    <span className="text-sm font-semibold text-white">
                      {featuredGuide?.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Related Guides Grid */}
          <div className="lg:col-span-5 space-y-4">
            {relatedGuides?.map((guide) =>
            <Link
              key={guide?.id}
              href="/guides"
              className="group flex gap-4 p-4 rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all hover-lift">
              
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <AppImage
                  src={guide?.image}
                  alt={guide?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {guide?.title}
                  </h4>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="ClockIcon" size={14} />
                    <span className="text-xs">{guide?.readTime}</span>
                  </div>
                </div>
                <Icon
                name="ArrowRightIcon"
                size={20}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all self-center" />
              
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedCategory;