import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { article_id, platform } = body;

    if (!article_id || !platform) {
      return NextResponse.json(
        { error: 'article_id and platform are required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from('social_shares')
      .insert({
        article_id,
        platform,
        user_id: user?.id || null,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      share: data,
    });
  } catch (error) {
    console.error('Social share tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track social share' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const articleId = searchParams.get('article_id');

    if (!articleId) {
      return NextResponse.json(
        { error: 'article_id is required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('social_shares')
      .select('platform')
      .eq('article_id', articleId);

    if (error) throw error;

    const platformCounts = data?.reduce((acc: any, share: any) => {
      acc[share.platform] = (acc[share.platform] || 0) + 1;
      return acc;
    }, {});

    return NextResponse.json({
      success: true,
      total: data?.length || 0,
      platforms: platformCounts || {},
    });
  } catch (error) {
    console.error('Social share stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social share stats' },
      { status: 500 }
    );
  }
}