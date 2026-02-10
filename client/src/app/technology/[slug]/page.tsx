import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import { menuData } from '@/data/menuData';

// Helper to format slug as fallback title
function formatSlug(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate metadata based on slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const techMenu = menuData.mainMenu.find(m => m.id === 'technology');
  let categoryItem;
  
  if (techMenu?.categories) {
    for (const cat of techMenu.categories) {
        const item = cat.items?.find(i => i.href === `/technology/${params.slug}`);
        if (item) {
            categoryItem = item;
            break;
        }
    }
  }
  
  const title = categoryItem ? categoryItem.label : formatSlug(params.slug);
  
  return {
    title: `${title} - Technology - CACBLAZE`,
    description: `Expert guides, troubleshooting tips, and resources about ${title}.`,
  };
}

export default function TechCategoryPage({ params }: { params: { slug: string } }) {
  // Find the category item to get the correct label
  const techMenu = menuData.mainMenu.find(m => m.id === 'technology');
  let categoryItem;
  
  if (techMenu?.categories) {
    for (const cat of techMenu.categories) {
        const item = cat.items?.find(i => i.href === `/technology/${params.slug}`);
        if (item) {
            categoryItem = item;
            break;
        }
    }
  }

  const title = categoryItem ? categoryItem.label : formatSlug(params.slug);
  
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Technology', href: '/technology' },
    { name: title, href: `/technology/${params.slug}` },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Breadcrumb items={breadcrumbItems} className="mb-6" />
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold uppercase tracking-wide mb-4">
                Topic
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Browse our latest guides, tutorials, and expert advice about {title}.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Placeholder for content listing */}
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <div className="max-w-md mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Curating Content</h3>
                        <p className="text-gray-500">
                            We are currently compiling the best resources for {title}. Check back soon for updated guides and articles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
