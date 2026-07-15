import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const attempts = new Map<string, { count: number; resetAt: number }>();
const allowedSubjects = new Set([
  'General Inquiry',
  'Feedback',
  'Report an Issue',
  'Partnership',
  'Contributor Application',
  'Topic Pitch',
  'Editorial Review',
]);

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',').at(-1)?.trim() || 'unknown';
  const now = Date.now();
  const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= 5) {
    return NextResponse.json({ error: 'Too many messages. Please try again later.' }, { status: 429 });
  }
  attempts.set(ip, {
    count: current && current.resetAt > now ? current.count + 1 : 1,
    resetAt: current && current.resetAt > now ? current.resetAt : now + 60 * 60 * 1000,
  });

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
  const subject = typeof body?.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';

  if (
    name.length < 2 ||
    name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !allowedSubjects.has(subject) ||
    message.length < 10 ||
    message.length > 5_000
  ) {
    return NextResponse.json({ error: 'Please check the submitted details.' }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (!host || !user || !pass) {
    return NextResponse.json({ error: 'Email delivery is not configured.' }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  await transporter.sendMail({
    from: process.env.CONTACT_FROM_EMAIL || user,
    to: process.env.CONTACT_TO_EMAIL || 'support@cacblaze.com',
    replyTo: email,
    subject: `[CACBLAZE] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return NextResponse.json({ success: true });
}
