import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');
    const featured = searchParams.get('featured') === 'true';

    const supabase = await createClient();

    let query = supabase
      .from('content_metadata')
      .select('*', { count: 'exact' })
      .eq('syndication_enabled', true)
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (category) {
      query = query.eq('category', category);
    }

    if (featured) {
      query = query.eq('featured', true);
    }

    const { data, error, count } = await query;

    if (error) throw error;

    return NextResponse.json(
      {
        success: true,
        data: data || [],
        pagination: {
          total: count || 0,
          limit,
          offset,
          hasMore: (count || 0) > offset + limit,
        },
      },
      {
        headers: {
          'Cache-Control': 'public, max-age=300, s-maxage=600',
        },
      }
    );
  } catch (error) {
    console.error('Content API error:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      article_id,
      title,
      excerpt,
      category,
      tags,
      author_name,
      read_time,
      featured = false,
    } = body;

    if (!article_id || !title || !category) {
      return NextResponse.json(
        { error: 'article_id, title, and category are required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin or author
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (!profile || !['admin', 'author'].includes(profile.role)) {
      return NextResponse.json({ error: 'Forbidden: Insufficient permissions' }, { status: 403 });
    }

    // Create content metadata
    const { data, error } = await supabase
      .from('content_metadata')
      .upsert(
        {
          article_id,
          title,
          excerpt,
          category,
          tags: tags || [],
          author_name: author_name || profile.role,
          author_id: user.id,
          read_time,
          featured,
          syndication_enabled: true,
        },
        { onConflict: 'article_id' }
      )
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Content metadata created/updated successfully',
      data,
    });
  } catch (error) {
    console.error('Content creation error:', error);
    return NextResponse.json({ error: 'Failed to create content metadata' }, { status: 500 });
  }
}
