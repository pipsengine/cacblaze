import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'session_id is required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('ama_questions')
      .select(`
        *,
        user_profiles:user_profiles!ama_questions_user_id_fkey(
          full_name,
          avatar_url,
          role
        ),
        ama_answers(
          id,
          answer,
          created_at,
          user_profiles:user_profiles!ama_answers_expert_id_fkey(
            full_name,
            avatar_url,
            role
          )
        )
      `)
      .eq('session_id', sessionId)
      .order('upvotes', { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      questions: data || [],
    });
  } catch (error) {
    console.error('AMA questions fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch AMA questions' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { session_id, question } = body;

    if (!session_id || !question) {
      return NextResponse.json(
        { error: 'session_id and question are required' },
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
      .from('ama_questions')
      .insert({
        session_id,
        user_id: user.id,
        question,
      })
      .select(`
        *,
        user_profiles:user_profiles!ama_questions_user_id_fkey(
          full_name,
          avatar_url,
          role
        )
      `)
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      question: data,
    });
  } catch (error) {
    console.error('AMA question creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create AMA question' },
      { status: 500 }
    );
  }
}