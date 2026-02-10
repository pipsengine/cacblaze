import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { data, error } = await supabase
      .from('reading_lists')
      .select(`
        *,
        reading_list_items(
          id,
          article_id,
          article_title,
          article_category,
          added_at
        )
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      lists: data || [],
    });
  } catch (error) {
    console.error('Reading lists fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reading lists' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, is_public } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'name is required' },
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
      .from('reading_lists')
      .insert({
        user_id: user.id,
        name,
        description,
        is_public: is_public || false,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      list: data,
    });
  } catch (error) {
    console.error('Reading list creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create reading list' },
      { status: 500 }
    );
  }
}