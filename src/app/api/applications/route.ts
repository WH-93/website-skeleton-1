import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  // In production: create Candidate + Application in Prisma
  return NextResponse.json({ id: 'app_' + Date.now(), status: 'Applied', ...body }, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const id = req.url.split('/').pop();
  return NextResponse.json({ id, ...body });
}
