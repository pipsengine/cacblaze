import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Best Smartphones in Nigeria (2026) - CACBLAZE',
  description: 'In-depth reviews of the latest smartphones available in Nigeria. Compare iPhone 15, Samsung S24, Tecno Phantom, and Infinix Note prices and features.',
  keywords: 'smartphone reviews, nigeria phone prices, iphone 15 nigeria, samsung s24 ultra, tecno phantom v fold, infinix note 40 pro'
};

const SmartphonesPage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Smartphones', href: '/reviews/smartphones' }
  ];

  const smartphones = [
    {
      id: 'iphone-15-pro-max',
      name: 'iPhone 15 Pro Max',
      tagline: 'The Ultimate Status Symbol',
      description: 'The titanium powerhouse that rules the Nigerian market with its resale value and video capabilities.',
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      imageAlt: 'iPhone 15 Pro Max Titanium',
      rating: 4.9,
      price: '₦2,200,000+',
      features: ['A17 Pro Chip', '5x Telephoto Zoom', 'Action Button', 'USB-C'],
      pros: ['Best video quality', 'High resale value', 'iOS Ecosystem'],
      cons: ['Extremely expensive', 'Slow charging vs Android'],
      href: '/reviews/smartphones/iphone-15-pro-max'
    },
    {
      id: 'samsung-s24-ultra',
      name: 'Samsung Galaxy S24 Ultra',
      tagline: 'The Android King',
      description: 'With Galaxy AI and the S-Pen, this is the most productive phone money can buy.',
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      imageAlt: 'Samsung Galaxy S24 Ultra',
      rating: 4.8,
      price: '₦1,950,000+',
      features: ['Galaxy AI', 'S-Pen Stylus', '200MP Camera', '7 Years Updates'],
      pros: ['Incredible display', 'Versatile cameras', 'Productivity features'],
      cons: ['Large and boxy', 'Shutter lag'],
      href: '/reviews/smartphones/samsung-s24-ultra'
    },
    {
      id: 'tecno-phantom-v-fold',
      name: 'Tecno Phantom V Fold',
      tagline: 'Foldable for the Masses',
      description: 'Tecno brings foldable technology to a more accessible price point without compromising too much.',
      image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      imageAlt: 'Foldable smartphone',
      rating: 4.5,
      price: '₦1,100,000',
      features: ['120Hz Main Screen', 'Zero-Gap Hinge', '50MP Triple Cam', '5000mAh Battery'],
      pros: ['Cheapest book-style fold', 'Carlcare support', 'Good battery life'],
      cons: ['Software bugs', 'Heavy crease'],
      href: '/reviews/smartphones/tecno-phantom-v-fold'
    },
    {
      id: 'infinix-note-40-pro',
      name: 'Infinix Note 40 Pro',
      tagline: 'Fast Charging Champion',
      description: 'Redefining the mid-range with features usually reserved for flagships.',
      image: "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      imageAlt: 'Infinix smartphone back',
      rating: 4.6,
      price: '₦450,000',
      features: ['100W Fast Charge', 'Wireless MagCharge', 'Curved AMOLED', '108MP Cam'],
      pros: ['Premium design', 'Complete box accessories', 'Great value'],
      cons: ['Bloatware', 'Average ultra-wide cam'],
      href: '/reviews/smartphones/infinix-note-40-pro'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Best Smartphones to Buy in Nigeria (2026)
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you have ₦150k or ₦2M, we've tested the best phones for the Nigerian market. We look at battery life (crucial for NEPA issues), camera quality, and resale value.
              </p>
            </div>
          </div>
        </section>

        {/* Listings */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="space-y-12">
            {smartphones.map((phone) => (
              <div key={phone.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="grid md:grid-cols-12 gap-0">
                  {/* Image Section */}
                  <div className="md:col-span-4 bg-gray-100 relative h-64 md:h-auto group">
                    <AppImage
                      src={phone.image}
                      alt={phone.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                      {phone.tagline}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-8 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">{phone.name}</h2>
                          <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Icon
                                  key={i}
                                  name="StarIcon"
                                  className={`h-5 w-5 ${i < Math.floor(phone.rating) ? 'fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-gray-600 font-medium">({phone.rating}/5.0)</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-900 font-bold">{phone.price}</span>
                          </div>
                        </div>
                        <Link 
                          href={phone.href}
                          className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                        >
                          Read Review
                        </Link>
                      </div>

                      <p className="text-gray-600 mb-6">{phone.description}</p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Features</h3>
                          <ul className="space-y-2">
                            {phone.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-600 text-sm">
                                <Icon name="CheckCircleIcon" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">The Verdict</h3>
                          <div className="space-y-2">
                            <div className="flex items-start text-sm">
                              <Icon name="PlusCircleIcon" className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600"><span className="font-medium text-gray-900">Pros:</span> {phone.pros.join(', ')}</span>
                            </div>
                            <div className="flex items-start text-sm">
                              <Icon name="MinusCircleIcon" className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600"><span className="font-medium text-gray-900">Cons:</span> {phone.cons.join(', ')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                      <span>Verified Review</span>
                      <Link href={phone.href} className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
                        Full Specs & Gallery <Icon name="ArrowRightIcon" className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SmartphonesPage;
