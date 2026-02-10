import { Article, WithContext, FAQPage, BreadcrumbList, Organization, Review, HowTo } from 'schema-dts';

interface ArticleData {
  title: string;
  description: string;
  author: {
    name: string;
    title: string;
  };
  publishDate: string;
  lastUpdated: string;
  category: string;
  heroImage: string;
  heroImageAlt: string;
  slug: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ReviewData {
  itemName: string;
  rating: number;
  reviewBody: string;
  author: string;
  datePublished: string;
}

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToData {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
  image?: string;
}

/**
 * Generate Article Schema markup
 */
export function generateArticleSchema(data: ArticleData): WithContext<Article> {
  const baseUrl = 'https://cacblaze.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.heroImage,
    author: {
      '@type': 'Person',
      name: data.author.name,
      jobTitle: data.author.title,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CACBLAZE',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/images/logo.png`,
      },
    },
    datePublished: data.publishDate,
    dateModified: data.lastUpdated,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/guides/${data.slug}`,
    },
    articleSection: data.category,
  };
}

/**
 * Generate FAQ Schema markup
 */
export function generateFAQSchema(faqs: FAQItem[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Breadcrumb Schema markup
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Organization Schema markup
 */
export function generateOrganizationSchema(): WithContext<Organization> {
  const baseUrl = 'https://cacblaze.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CACBLAZE',
    url: baseUrl,
    logo: `${baseUrl}/assets/images/logo.png`,
    description: 'Nigerian knowledge platform providing comprehensive guides across technology, education, lifestyle, and more.',
    sameAs: [
      'https://twitter.com/cacblaze',
      'https://facebook.com/cacblaze',
      'https://linkedin.com/company/cacblaze',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@cacblaze.com',
    },
  };
}

/**
 * Generate Review Schema markup
 */
export function generateReviewSchema(data: ReviewData): WithContext<Review> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Thing',
      name: data.itemName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: data.rating,
      bestRating: 5,
    },
    reviewBody: data.reviewBody,
    author: {
      '@type': 'Person',
      name: data.author,
    },
    datePublished: data.datePublished,
  };
}

/**
 * Generate HowTo Schema markup
 */
export function generateHowToSchema(data: HowToData): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    image: data.image,
    totalTime: data.totalTime,
    step: data.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };
}
