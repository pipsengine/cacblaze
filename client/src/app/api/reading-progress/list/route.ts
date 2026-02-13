import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase?.auth?.getUser();

    if (!user) {
      return NextResponse?.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data, error } = await supabase
      ?.from('reading_progress')
      ?.select('*')
      ?.eq('user_id', user?.id)
      ?.order('updated_at', { ascending: false })
      ?.limit(20);

    if (error) throw error;

    return NextResponse?.json({
      progress: data || [],
    });
  } catch (error) {
    console.error('Reading progress list error:', error);
    return NextResponse?.json({ error: 'Failed to fetch reading progress list' }, { status: 500 });
  }
}
