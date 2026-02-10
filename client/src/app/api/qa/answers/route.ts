import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question_id, content } = body;

    if (!question_id || !content) {
      return NextResponse.json(
        { error: 'question_id and content are required' },
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
      .from('qa_answers')
      .insert({
        question_id,
        user_id: user.id,
        content,
      })
      .select(`
        *,
        user_profiles:user_profiles!qa_answers_user_id_fkey(
          full_name,
          avatar_url,
          role
        )
      `)
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      answer: data,
    });
  } catch (error) {
    console.error('Q&A answer creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create Q&A answer' },
      { status: 500 }
    );
  }
}