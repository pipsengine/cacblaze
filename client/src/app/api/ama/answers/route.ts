import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question_id, answer } = body;

    if (!question_id || !answer) {
      return NextResponse.json(
        { error: 'question_id and answer are required' },
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
      .from('ama_answers')
      .insert({
        question_id,
        expert_id: user.id,
        answer,
      })
      .select(`
        *,
        user_profiles:user_profiles!ama_answers_expert_id_fkey(
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
    console.error('AMA answer creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create AMA answer' },
      { status: 500 }
    );
  }
}