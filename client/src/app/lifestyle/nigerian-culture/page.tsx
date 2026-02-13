import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Nigerian Culture Hub - CACBLAZE',
  description:
    'Explore Nigerian culture through recipes, festivals, traditions, and inspiring success stories from Nigerian entrepreneurs and professionals.',
  keywords:
    'Nigerian culture, Nigerian recipes, Nigerian festivals, Nigerian success stories, Nigerian traditions',
};

const NigerianCulturePage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Nigerian Culture', href: '/nigerian-culture' },
  ];

  const categories = [
    {
      id: 'recipes',
      title: 'Nigerian Recipes',
      description: 'Traditional and modern Nigerian dishes with step-by-step guides',
      icon: 'FireIcon',
      count: '200+ Recipes',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1499722b5-1764831762547.png',
      imageAlt: 'Traditional Nigerian jollof rice with chicken and vegetables',
      href: '/nigerian-culture/recipes',
    },
    {
      id: 'festivals',
      title: 'Festivals & Events',
      description: 'Celebrate Nigerian festivals, holidays, and cultural events',
      icon: 'SparklesIcon',
      count: '50+ Festivals',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1610e64fa-1765308043421.png',
      imageAlt: 'Nigerian cultural festival with colorful traditional attire',
      href: '/nigerian-culture/festivals',
    },
    {
      id: 'success-stories',
      title: 'Success Stories',
      description: 'Inspiring journeys of Nigerian entrepreneurs and professionals',
      icon: 'TrophyIcon',
      count: '100+ Stories',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a0c1f105-1767029049113.png',
      imageAlt: 'Successful Nigerian entrepreneur in modern office',
      href: '/nigerian-culture/success-stories',
    },
    {
      id: 'traditions',
      title: 'Traditions & Heritage',
      description: 'Explore Nigerian customs, languages, and cultural practices',
      icon: 'HomeModernIcon',
      count: '75+ Articles',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ea7d6846-1768401186506.png',
      imageAlt: 'Traditional Nigerian artifacts and cultural items',
      href: '/nigerian-culture/traditions',
    },
  ];

  const featuredRecipes = [
    {
      id: 'jollof',
      title: 'Perfect Nigerian Jollof Rice',
      difficulty: 'Intermediate',
      time: '45 min',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1845b5264-1768692531998.png',
      imageAlt: 'Steaming plate of Nigerian jollof rice',
      href: '/nigerian-culture/recipes/jollof-rice',
    },
    {
      id: 'egusi',
      title: 'Traditional Egusi Soup',
      difficulty: 'Advanced',
      time: '60 min',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e10f409e-1764828071458.png',
      imageAlt: 'Bowl of egusi soup with assorted meat',
      href: '/nigerian-culture/recipes/egusi-soup',
    },
    {
      id: 'suya',
      title: 'Authentic Suya Recipe',
      difficulty: 'Beginner',
      time: '30 min',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_14195ad70-1768214595314.png',
      imageAlt: 'Grilled suya skewers with spices',
      href: '/nigerian-culture/recipes/suya',
    },
    {
      id: 'puff-puff',
      title: 'Sweet Puff Puff',
      difficulty: 'Beginner',
      time: '25 min',
      image: 'https://images.unsplash.com/photo-1653550027228-e3202a24ccc1',
      imageAlt: 'Golden brown puff puff in basket',
      href: '/nigerian-culture/recipes/puff-puff',
    },
  ];

  const upcomingFestivals = [
    {
      id: 'durbar',
      name: 'Durbar Festival',
      location: 'Kano',
      date: 'June 2026',
      description: 'Spectacular horse parade celebrating Eid',
      href: '/nigerian-culture/festivals/durbar',
    },
    {
      id: 'calabar',
      name: 'Calabar Carnival',
      location: 'Calabar',
      date: 'December 2026',
      description: "Africa's biggest street party",
      href: '/nigerian-culture/festivals/calabar-carnival',
    },
    {
      id: 'osun',
      name: 'Osun-Osogbo Festival',
      location: 'Osogbo',
      date: 'August 2026',
      description: 'Ancient Yoruba festival at sacred grove',
      href: '/nigerian-culture/festivals/osun-osogbo',
    },
  ];

  const successStories = [
    {
      id: 'tech',
      name: 'Adebayo Ogunlesi',
      title: 'Tech Entrepreneur',
      achievement: 'Built ₦500M fintech startup',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1db7d00f3-1770546212094.png',
      imageAlt: 'Portrait of successful tech entrepreneur',
      href: '/nigerian-culture/success-stories/adebayo-ogunlesi',
    },
    {
      id: 'fashion',
      name: 'Chioma Nnadi',
      title: 'Fashion Designer',
      achievement: 'International fashion brand from Lagos',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bdd069e9-1769473811671.png',
      imageAlt: 'Portrait of fashion designer in studio',
      href: '/nigerian-culture/success-stories/chioma-nnadi',
    },
    {
      id: 'agriculture',
      name: 'Ibrahim Yusuf',
      title: 'Agritech Founder',
      achievement: 'Revolutionizing farming with technology',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_164e34492-1763301724819.png',
      imageAlt: 'Portrait of agritech entrepreneur',
      href: '/nigerian-culture/success-stories/ibrahim-yusuf',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                Cultural Heritage
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Nigerian Culture Hub
              </h1>
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                Celebrate Nigerian heritage through food, festivals, traditions, and inspiring
                success stories.
              </p>
            </div>
          </div>
        </section>

        {/* Main Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group block rounded-3xl border border-gray-200 bg-white hover:border-primary transition-all overflow-hidden hover-lift"
                >
                  <div className="relative h-64 overflow-hidden">
                    <AppImage
                      src={category.image}
                      alt={category.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon name={category.icon as any} size={20} className="text-white" />
                        </div>
                        <span className="text-white/90 text-sm font-semibold">
                          {category.count}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="py-16 bg-gradient-to-br from-muted/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Featured Recipes</h2>
              <Link
                href="/nigerian-culture/recipes"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  href={recipe.href}
                  className="group block rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all overflow-hidden hover-lift"
                >
                  <div className="relative h-48 overflow-hidden">
                    <AppImage
                      src={recipe.image}
                      alt={recipe.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground">
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="ClockIcon" size={14} />
                      <span className="text-xs">{recipe.time}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Festivals */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Upcoming Festivals</h2>
              <Link
                href="/nigerian-culture/festivals"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                View Calendar →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingFestivals.map((festival) => (
                <Link
                  key={festival.id}
                  href={festival.href}
                  className="group block p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all hover-lift"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="CalendarIcon" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {festival.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-secondary">
                        <Icon name="MapPinIcon" size={14} />
                        {festival.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-secondary mb-3">{festival.description}</p>
                  <div className="text-xs font-semibold text-primary">{festival.date}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Success Stories</h2>
              <Link
                href="/nigerian-culture/success-stories"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Read More →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story) => (
                <Link
                  key={story.id}
                  href={story.href}
                  className="group block rounded-2xl border border-gray-200 bg-white hover:border-primary transition-all overflow-hidden hover-lift"
                >
                  <div className="relative h-64 overflow-hidden">
                    <AppImage
                      src={story.image}
                      alt={story.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {story.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">{story.title}</p>
                    <p className="text-sm text-secondary">{story.achievement}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6">
                <Icon name="HeartIcon" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Share Your Story</h2>
              <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                Have an inspiring success story or family recipe? Share it with our community.
              </p>
              <Link
                href="/nigerian-culture/submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover-lift"
              >
                Submit Your Story
                <Icon name="ArrowRightIcon" size={20} className="text-white" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NigerianCulturePage;
