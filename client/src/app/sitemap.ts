import { MetadataRoute } from 'next';
import { menuData } from '@/data/menuData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cacblaze.com';
  const currentDate = new Date();

  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/homepage`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
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

  return [...staticPages, ...categoryPages, ...subCategoryPages, ...articlePages];
}
