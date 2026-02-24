import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
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

    const h = await headers();
    const proto = h.get('x-forwarded-proto') ?? 'https';
    const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'cacblaze.com';
    const baseUrl = `${proto}://${host}`;

    // Create feed
    const feed = new Feed({
      title: 'CACBLAZE - Knowledge That Empowers',
      description:
        'Human-centered content for the AI era. Discover verified guides, tutorials, and insights across every domain.',
      id: `${baseUrl}/`,
      link: `${baseUrl}/`,
      language: 'en',
      image: `${baseUrl}/favicon.ico`,
      favicon: `${baseUrl}/favicon.ico`,
      copyright: `All rights reserved ${new Date().getFullYear()}, CACBLAZE`,
      updated: articles && articles.length > 0 ? new Date(articles[0].updated_at) : new Date(),
      generator: 'CACBLAZE RSS Generator',
      feedLinks: {
        rss2: `${baseUrl}/api/rss`,
        json: `${baseUrl}/api/rss?format=json`,
        atom: `${baseUrl}/api/rss?format=atom`,
      },
    });

    // Add articles to feed
    articles?.forEach((article) => {
      feed.addItem({
        title: article.title,
        id: `${baseUrl}/guides/${article.article_id}`,
        link: `${baseUrl}/guides/${article.article_id}`,
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
