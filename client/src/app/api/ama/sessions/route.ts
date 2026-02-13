import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'upcoming';
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '20');

    const supabase = await createClient();

    let query = supabase
      .from('ama_sessions')
      .select(
        `
        *,
        user_profiles:user_profiles!ama_sessions_expert_id_fkey(
          full_name,
          avatar_url,
          role
        )
      `
      )
      .order('scheduled_at', { ascending: status === 'upcoming' })
      .limit(limit);

    if (status) {
      query = query.eq('status', status);
    }

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) throw error;

    return NextResponse.json({
      success: true,
      sessions: data || [],
    });
  } catch (error) {
    console.error('AMA sessions fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch AMA sessions' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      expert_bio,
      expert_title,
      category,
      scheduled_at,
      duration_minutes,
    } = body;

    if (!title || !description || !category || !scheduled_at) {
      return NextResponse.json(
        { error: 'title, description, category, and scheduled_at are required' },
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

    const { data, error } = await supabase
      .from('ama_sessions')
      .insert({
        expert_id: user.id,
        title,
        description,
        expert_bio,
        expert_title,
        category,
        scheduled_at,
        duration_minutes: duration_minutes || 60,
      })
      .select(
        `
        *,
        user_profiles:user_profiles!ama_sessions_expert_id_fkey(
          full_name,
          avatar_url,
          role
        )
      `
      )
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      session: data,
    });
  } catch (error) {
    console.error('AMA session creation error:', error);
    return NextResponse.json({ error: 'Failed to create AMA session' }, { status: 500 });
  }
}
