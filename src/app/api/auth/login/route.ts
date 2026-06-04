import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminToken = process.env.ADMIN_TOKEN;

  if (!adminPassword || !adminToken) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
  }

  if (password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set('admin_token', adminToken, {
    httpOnly: false, // must be readable by client-side JS for admin layout auth check
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    // session cookie — expires on browser close
  });

  return response;
}
