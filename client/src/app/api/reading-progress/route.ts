import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

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
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { data, error } = await supabase
      .from('reading_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('article_id', articleId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;

    return NextResponse.json({
      progress: data || null,
    });
  } catch (error) {
    console.error('Reading progress fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reading progress' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { article_id, progress_percentage, last_position, completed } = body;

    if (!article_id || progress_percentage === undefined) {
      return NextResponse.json(
        { error: 'article_id and progress_percentage are required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { data, error } = await supabase
      .from('reading_progress')
      .upsert(
        {
          user_id: user.id,
          article_id,
          progress_percentage: Math.min(100, Math.max(0, progress_percentage)),
          last_position: last_position || 0,
          completed: completed || progress_percentage >= 100,
        },
        { onConflict: 'user_id,article_id' }
      )
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Reading progress saved',
      progress: data,
    });
  } catch (error) {
    console.error('Reading progress save error:', error);
    return NextResponse.json(
      { error: 'Failed to save reading progress' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
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
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { error } = await supabase
      .from('reading_progress')
      .delete()
      .eq('user_id', user.id)
      .eq('article_id', articleId);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Reading progress deleted',
    });
  } catch (error) {
    console.error('Reading progress delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete reading progress' },
      { status: 500 }
    );
  }
}