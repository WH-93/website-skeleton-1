import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow login page and login API — also allow /admin itself (login-or-dashboard page)
  if (pathname === '/admin' || pathname === '/admin/login' || pathname === '/api/auth/login') {
    return NextResponse.next();
  }

  // Protect /admin/*
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('admin_token')?.value;
    if (token !== process.env.ADMIN_TOKEN) {
      const loginUrl = new URL('/admin/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
