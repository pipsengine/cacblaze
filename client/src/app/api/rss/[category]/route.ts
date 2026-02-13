import { NextResponse } from 'next/server';
import { Feed } from 'feed';
import { createClient } from '@/lib/supabase/server';

const CATEGORY_METADATA: Record<string, { title: string; description: string }> = {
  technology: {
    title: 'CACBLAZE - Technology Guides',
    description:
      'Latest technology guides, tutorials, and insights on web development, programming, and tech trends.',
  },
  education: {
    title: 'CACBLAZE - Education Resources',
    description:
      'Educational content, learning strategies, and academic resources for students and lifelong learners.',
  },
  lifestyle: {
    title: 'CACBLAZE - Lifestyle Guides',
    description:
      'Lifestyle tips, productivity hacks, wellness advice, and personal development guides.',
  },
  guides: {
    title: 'CACBLAZE - Comprehensive Guides',
    description:
      'In-depth guides covering finance, career, productivity, and essential life skills.',
  },
  howto: {
    title: 'CACBLAZE - How-To Tutorials',
    description:
      'Step-by-step tutorials and practical how-to guides for everyday tasks and skills.',
  },
  reviews: {
    title: 'CACBLAZE - Product Reviews',
    description:
      'Honest reviews of technology, software, books, and services to help you make informed decisions.',
  },
  'local-resources': {
    title: 'CACBLAZE - Local Resources',
    description: 'Nigerian city guides, local business reviews, and community resources.',
  },
};

export async function GET(request: Request, { params }: { params: { category: string } }) {
  try {
    const category = params.category;
    const metadata = CATEGORY_METADATA[category];

    if (!metadata) {
      return NextResponse.json({ error: 'Invalid category' }, { status: 404 });
    }

    const supabase = await createClient();

    // Fetch content for specific category
    const { data: articles, error } = await supabase
      .from('content_metadata')
      .select('*')
      .eq('category', category.charAt(0).toUpperCase() + category.slice(1))
      .eq('syndication_enabled', true)
      .order('published_at', { ascending: false })
      .limit(50);

    if (error) throw error;

    // Create category-specific feed
    const feed = new Feed({
      title: metadata.title,
      description: metadata.description,
      id: `https://cacblaze.com/${category}`,
      link: `https://cacblaze.com/${category}`,
      language: 'en',
      image: 'https://cacblaze.com/favicon.ico',
      favicon: 'https://cacblaze.com/favicon.ico',
      copyright: `All rights reserved ${new Date().getFullYear()}, CACBLAZE`,
      updated: articles && articles.length > 0 ? new Date(articles[0].updated_at) : new Date(),
      generator: 'CACBLAZE RSS Generator',
      feedLinks: {
        rss2: `https://cacblaze.com/api/rss/${category}`,
        json: `https://cacblaze.com/api/rss/${category}?format=json`,
        atom: `https://cacblaze.com/api/rss/${category}?format=atom`,
      },
    });

    // Add articles to feed
    articles?.forEach((article) => {
      feed.addItem({
        title: article.title,
        id: `https://cacblaze.com/guides/${article.article_id}`,
        link: `https://cacblaze.com/guides/${article.article_id}`,
        description: article.excerpt || '',
        content: article.excerpt || '',
        author: [
          {
            name: article.author_name || 'CACBLAZE Team',
          },
        ],
        date: new Date(article.published_at),
        category: article.tags?.map((tag: string) => ({ name: tag })) || [],
      });
    });

    // Return RSS XML
    return new NextResponse(feed.rss2(), {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Category RSS feed generation error:', error);
    return NextResponse.json({ error: 'Failed to generate category RSS feed' }, { status: 500 });
  }
}
