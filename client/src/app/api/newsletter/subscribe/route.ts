import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

const allowedFrequencies = new Set(['daily', 'weekly', 'monthly']);
const requestStore = new Map<string, { count: number; resetAt: number }>();

type NewsletterSubscriptionUpdate = {
  subscribed_topics?: string[];
  frequency?: string;
  status?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isRateLimited(key: string, windowMs: number, max: number) {
  const now = Date.now();
  const current = requestStore.get(key);

  if (!current || current.resetAt <= now) {
    requestStore.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (current.count >= max) {
    return true;
  }

  current.count += 1;
  requestStore.set(key, current);
  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawEmail = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    const frequency = typeof body?.frequency === 'string' ? body.frequency : 'weekly';
    const rawTopics: unknown[] = Array.isArray(body?.topics) ? (body.topics as unknown[]) : [];
    const topics = rawTopics
      .filter((topic: unknown): topic is string => typeof topic === 'string')
      .slice(0, 6);
    const forwardedFor = request.headers.get('x-forwarded-for') || 'unknown';
    const rateKey = `newsletter:${forwardedFor.split(',')[0]?.trim()}:${rawEmail || 'anonymous'}`;

    if (isRateLimited(rateKey, 15 * 60 * 1000, 6)) {
      return NextResponse.json(
        { error: 'Too many subscription attempts. Please try again shortly.' },
        { status: 429 }
      );
    }

    if (
      !rawEmail ||
      !isValidEmail(rawEmail) ||
      topics.length === 0 ||
      !allowedFrequencies.has(frequency)
    ) {
      return NextResponse.json(
        { error: 'Please enter a valid email, topic choice, and delivery frequency' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Get current user if authenticated
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Create or update subscription
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .upsert(
        {
          email: rawEmail,
          user_id: user?.id || null,
          subscribed_topics: topics,
          frequency,
          status: 'active',
        },
        { onConflict: 'email' }
      )
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      subscription: data,
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Failed to subscribe to newsletter' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's subscription
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') throw error;

    return NextResponse.json({
      subscription: data || null,
    });
  } catch (error) {
    console.error('Newsletter fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch subscription' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { topics, frequency, status } = body;

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Update subscription
    const updateData: NewsletterSubscriptionUpdate = {};
    if (topics) updateData.subscribed_topics = topics;
    if (frequency) updateData.frequency = frequency;
    if (status) updateData.status = status;

    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .update(updateData)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Subscription updated successfully',
      subscription: data,
    });
  } catch (error) {
    console.error('Newsletter update error:', error);
    return NextResponse.json({ error: 'Failed to update subscription' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Unsubscribe
    const { error } = await supabase
      .from('newsletter_subscriptions')
      .update({ status: 'unsubscribed' })
      .eq('user_id', user.id);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter',
    });
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    return NextResponse.json({ error: 'Failed to unsubscribe' }, { status: 500 });
  }
}
