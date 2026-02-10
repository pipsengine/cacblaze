import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question_id, answer_id } = body;

    if (!question_id && !answer_id) {
      return NextResponse.json(
        { error: 'Either question_id or answer_id is required' },
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
      .from('qa_upvotes')
      .insert({
        user_id: user.id,
        question_id: question_id || null,
        answer_id: answer_id || null,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      upvote: data,
    });
  } catch (error) {
    console.error('Q&A upvote error:', error);
    return NextResponse.json(
      { error: 'Failed to upvote' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const questionId = searchParams.get('question_id');
    const answerId = searchParams.get('answer_id');

    if (!questionId && !answerId) {
      return NextResponse.json(
        { error: 'Either question_id or answer_id is required' },
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

    let query = supabase
      .from('qa_upvotes')
      .delete()
      .eq('user_id', user.id);

    if (questionId) {
      query = query.eq('question_id', questionId);
    } else if (answerId) {
      query = query.eq('answer_id', answerId);
    }

    const { error } = await query;

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Upvote removed',
    });
  } catch (error) {
    console.error('Q&A upvote removal error:', error);
    return NextResponse.json(
      { error: 'Failed to remove upvote' },
      { status: 500 }
    );
  }
}