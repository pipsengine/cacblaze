import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { list_id, article_id, article_title, article_category } = body;

    if (!list_id || !article_id || !article_title || !article_category) {
      return NextResponse.json(
        { error: 'list_id, article_id, article_title, and article_category are required' },
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
      .from('reading_list_items')
      .insert({
        list_id,
        article_id,
        article_title,
        article_category,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      item: data,
    });
  } catch (error) {
    console.error('Reading list item creation error:', error);
    return NextResponse.json(
      { error: 'Failed to add item to reading list' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const itemId = searchParams.get('item_id');

    if (!itemId) {
      return NextResponse.json(
        { error: 'item_id is required' },
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
      .from('reading_list_items')
      .delete()
      .eq('id', itemId);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Item removed from reading list',
    });
  } catch (error) {
    console.error('Reading list item deletion error:', error);
    return NextResponse.json(
      { error: 'Failed to remove item from reading list' },
      { status: 500 }
    );
  }
}