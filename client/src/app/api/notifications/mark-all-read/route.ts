import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase?.auth?.getUser();

    if (!user) {
      return NextResponse?.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { error } = await supabase?.from('user_notifications')?.update({ status: 'read', read_at: new Date()?.toISOString() })?.eq('user_id', user?.id)?.eq('status', 'unread');

    if (error) throw error;

    return NextResponse?.json({
      success: true,
      message: 'All notifications marked as read',
    });
  } catch (error) {
    console.error('Mark all read error:', error);
    return NextResponse?.json(
      { error: 'Failed to mark all as read' },
      { status: 500 }
    );
  }
}