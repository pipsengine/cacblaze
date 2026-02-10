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
      .from('user_preferences')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') throw error;

    return NextResponse.json({
      preferences: data || {
        favorite_categories: [],
        favorite_topics: [],
        reading_history: [],
        notification_enabled: true,
        email_notifications: true,
      },
    });
  } catch (error) {
    console.error('Preferences fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch preferences' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const {
      favorite_categories,
      favorite_topics,
      notification_enabled,
      email_notifications,
    } = body;

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const updateData: any = {};
    if (favorite_categories !== undefined) updateData.favorite_categories = favorite_categories;
    if (favorite_topics !== undefined) updateData.favorite_topics = favorite_topics;
    if (notification_enabled !== undefined) updateData.notification_enabled = notification_enabled;
    if (email_notifications !== undefined) updateData.email_notifications = email_notifications;

    const { data, error } = await supabase
      .from('user_preferences')
      .upsert(
        {
          user_id: user.id,
          ...updateData,
        },
        { onConflict: 'user_id' }
      )
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Preferences updated successfully',
      preferences: data,
    });
  } catch (error) {
    console.error('Preferences update error:', error);
    return NextResponse.json(
      { error: 'Failed to update preferences' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { article_id, category } = body;

    if (!article_id || !category) {
      return NextResponse.json(
        { error: 'article_id and category are required' },
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

    // Call the database function to update reading history
    const { error } = await supabase.rpc('update_reading_history', {
      p_user_id: user.id,
      p_article_id: article_id,
      p_category: category,
    });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Reading history updated',
    });
  } catch (error) {
    console.error('Reading history update error:', error);
    return NextResponse.json(
      { error: 'Failed to update reading history' },
      { status: 500 }
    );
  }
}