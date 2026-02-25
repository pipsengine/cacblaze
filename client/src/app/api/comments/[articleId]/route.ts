import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([], { status: 200, headers: { 'Cache-Control': 'no-store' } });
}

export async function PUT() {
  return NextResponse.json({ ok: true }, { status: 200 });
}

export async function DELETE() {
  return NextResponse.json({ ok: true }, { status: 200 });
}
