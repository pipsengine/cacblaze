import { NextResponse } from 'next/server';
import { Feed } from 'feed';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createClient();

    // Fetch all content metadata
    const { data: articles, error } = await supabase
      .from('content_metadata')
      .select('*')
      .eq('syndication_enabled', true)
      .order('published_at', { ascending: false })
      .limit(50);

    if (error) throw error;

    // Create feed
    const feed = new Feed({
      title: 'CACBLAZE - Knowledge That Empowers',
      description:
        'Human-centered content for the AI era. Discover verified guides, tutorials, and insights across every domain.',
      id: 'https://cacblaze.com/',
      link: 'https://cacblaze.com/',
      language: 'en',
      image: 'https://cacblaze.com/favicon.ico',
      favicon: 'https://cacblaze.com/favicon.ico',
      copyright: `All rights reserved ${new Date().getFullYear()}, CACBLAZE`,
      updated: articles && articles.length > 0 ? new Date(articles[0].updated_at) : new Date(),
      generator: 'CACBLAZE RSS Generator',
      feedLinks: {
        rss2: 'https://cacblaze.com/api/rss',
        json: 'https://cacblaze.com/api/rss?format=json',
        atom: 'https://cacblaze.com/api/rss?format=atom',
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
    console.error('RSS feed generation error:', error);
    return NextResponse.json({ error: 'Failed to generate RSS feed' }, { status: 500 });
  }
}
