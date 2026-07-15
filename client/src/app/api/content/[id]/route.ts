import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: articleId } = await params;

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('content_metadata')
      .select('*')
      .eq('article_id', articleId)
      .eq('syndication_enabled', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Content not found' }, { status: 404 });
      }
      throw error;
    }

    return NextResponse.json(
      {
        success: true,
        data,
      },
      {
        headers: {
          'Cache-Control': 'public, max-age=300, s-maxage=600',
        },
      }
    );
  } catch (error) {
    console.error('Content fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: articleId } = await params;
    const body = (await request.json()) as Record<string, unknown>;

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check permissions
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role,is_active')
      .eq('id', user.id)
      .single();

    if (!profile?.is_active || !['admin', 'author'].includes(profile.role)) {
      return NextResponse.json({ error: 'Forbidden: Insufficient permissions' }, { status: 403 });
    }

    const { data: existing, error: existingError } = await supabase
      .from('content_metadata')
      .select('article_id,author_id')
      .eq('article_id', articleId)
      .single();

    if (existingError || !existing) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    if (profile.role === 'author' && existing.author_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden: You can only edit your own content' }, { status: 403 });
    }

    const updates: Record<string, unknown> = {};
    const stringFields = ['title', 'excerpt', 'category', 'author_name'] as const;
    for (const field of stringFields) {
      if (typeof body[field] === 'string') updates[field] = body[field].trim();
    }
    if (Array.isArray(body.tags) && body.tags.every((tag) => typeof tag === 'string')) {
      updates.tags = body.tags.slice(0, 20).map((tag) => tag.trim()).filter(Boolean);
    }
    if (typeof body.read_time === 'number' && body.read_time >= 0 && body.read_time <= 600) {
      updates.read_time = body.read_time;
    }
    if (typeof body.featured === 'boolean') updates.featured = body.featured;
    if (profile.role === 'admin' && typeof body.syndication_enabled === 'boolean') {
      updates.syndication_enabled = body.syndication_enabled;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('content_metadata')
      .update(updates)
      .eq('article_id', articleId)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Content updated successfully',
      data,
    });
  } catch (error) {
    console.error('Content update error:', error);
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: articleId } = await params;

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (!profile || profile.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    // Delete content metadata
    const { error } = await supabase.from('content_metadata').delete().eq('article_id', articleId);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Content deleted successfully',
    });
  } catch (error) {
    console.error('Content deletion error:', error);
    return NextResponse.json({ error: 'Failed to delete content' }, { status: 500 });
  }
}
