import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase?.auth?.getUser();

    if (!user) {
      return NextResponse?.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get personalized recommendations using database function
    const { data, error } = await supabase?.rpc('get_personalized_content', {
      p_user_id: user?.id,
      p_limit: 10,
    });

    if (error) throw error;

    return NextResponse?.json({
      success: true,
      recommendations: data || [],
    });
  } catch (error) {
    console.error('Recommendations fetch error:', error);
    return NextResponse?.json(
      { error: 'Failed to fetch recommendations' },
      { status: 500 }
    );
  }
}