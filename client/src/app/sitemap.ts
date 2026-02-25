import { MetadataRoute } from 'next';
import { menuData } from '@/data/menuData';
import { laptopReviews } from '@/data/laptops';
import { smartphoneReviews } from '@/data/smartphones';
import { tabletReviews } from '@/data/tablets';
import { accessoryReviews } from '@/data/accessories';
import { restaurants } from '@/data/restaurants';
import { hotelReviews } from '@/data/hotels';
import { learningAppReviews } from '@/data/learning-apps';
import { techBookReviews } from '@/data/tech-books';
import { educationalBooks } from '@/data/educational-books';
import { businessBookReviews } from '@/data/business-books';
import { gadgetReviews } from '@/data/gadgets';
import { saasReviews } from '@/data/saas';
import { digitalPlatformReviews } from '@/data/digital-platforms';
import { onlineServiceReviews } from '@/data/online-services';
import { subscriptionReviews } from '@/data/subscriptions';
import { serviceProviderReviews } from '@/data/service-providers';
import { localVendorReviews } from '@/data/local-vendors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4028');
  const currentDate = new Date();

  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/advertise`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Category pages with priority scoring
  const categoryPriorities: Record<string, number> = {
    technology: 0.9,
    education: 0.9,
    howto: 0.85,
    guides: 0.9,
    reviews: 0.8,
    lifestyle: 0.75,
    'local-resources': 0.7,
  };

  const categoryPages: MetadataRoute.Sitemap = [];
  const subCategoryPages: MetadataRoute.Sitemap = [];

  // Generate category and subcategory pages from menuData
  menuData.mainMenu.forEach((menuItem) => {
    const categoryId = menuItem.id;
    const categoryPriority = categoryPriorities[categoryId] || 0.7;

    // Main category page
    categoryPages.push({
      url: `${baseUrl}${menuItem.href}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: categoryPriority,
    });

    // Subcategory pages
    if (menuItem.categories) {
      menuItem.categories.forEach((category) => {
        category.items.forEach((item) => {
          subCategoryPages.push({
            url: `${baseUrl}${item.href}`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: categoryPriority - 0.1, // Slightly lower than parent category
          });
        });
      });
    }
  });

  // Mock article pages (in production, fetch from database)
  const articlePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guides/complete-guide-web-development`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/advanced-react`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/typescript-beginners`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/nodejs-apis`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ];

  // Review detail pages from local data sources
  const fromRecord = (records: Record<string, { slug: string }>, prefix: string): MetadataRoute.Sitemap =>
    Object.values(records).map((item) => ({
      url: `${baseUrl}${prefix}/${item.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  const reviewPages: MetadataRoute.Sitemap = [
    ...fromRecord(laptopReviews, '/reviews/laptops'),
    ...fromRecord(smartphoneReviews, '/reviews/smartphones'),
    ...fromRecord(tabletReviews, '/reviews/tablets'),
    ...fromRecord(accessoryReviews, '/reviews/accessories'),
    ...fromRecord(gadgetReviews, '/reviews/gadgets'),
    ...fromRecord(restaurants, '/reviews/restaurants'),
    ...fromRecord(hotelReviews, '/reviews/hotels'),
    ...fromRecord(learningAppReviews, '/reviews/learning-apps'),
    ...fromRecord(techBookReviews, '/reviews/tech-books'),
    ...fromRecord(educationalBooks, '/reviews/educational-books'),
    ...fromRecord(businessBookReviews, '/reviews/business-books'),
    ...fromRecord(saasReviews, '/reviews/saas'),
    ...fromRecord(digitalPlatformReviews, '/reviews/digital-platforms'),
    ...fromRecord(onlineServiceReviews, '/reviews/online-services'),
    ...fromRecord(subscriptionReviews, '/reviews/subscriptions'),
    ...fromRecord(serviceProviderReviews, '/reviews/service-providers'),
    ...fromRecord(localVendorReviews, '/reviews/local-vendors'),
  ];

  return [...staticPages, ...categoryPages, ...subCategoryPages, ...articlePages, ...reviewPages];
}
