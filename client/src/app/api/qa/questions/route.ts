import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const status = searchParams.get('status') || 'open';
    const limit = parseInt(searchParams.get('limit') || '20');

    const supabase = await createClient();

    let query = supabase
      .from('qa_questions')
      .select(
        `
        *,
        user_profiles:user_profiles!qa_questions_user_id_fkey(
          full_name,
          avatar_url,
          role
        ),
        qa_answers(
          id,
          content,
          is_accepted,
          upvotes,
          created_at,
          user_profiles:user_profiles!qa_answers_user_id_fkey(
            full_name,
            avatar_url,
            role
          )
        )
      `
      )
      .order('created_at', { ascending: false })
      .limit(limit);

    if (category) {
      query = query.eq('category', category);
    }

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) throw error;

    return NextResponse.json({
      success: true,
      questions: data || [],
    });
  } catch (error) {
    console.error('Q&A questions fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch Q&A questions' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { category, title, content } = body;

    if (!category || !title || !content) {
      return NextResponse.json(
        { error: 'category, title, and content are required' },
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
      .from('qa_questions')
      .insert({
        user_id: user.id,
        category,
        title,
        content,
      })
      .select(
        `
        *,
        user_profiles:user_profiles!qa_questions_user_id_fkey(
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
      question: data,
    });
  } catch (error) {
    console.error('Q&A question creation error:', error);
    return NextResponse.json({ error: 'Failed to create Q&A question' }, { status: 500 });
  }
}
