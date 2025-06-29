import { NextResponse } from 'next/server';

const protectedRoutes = ['/admin'];

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const role = request.cookies.get('role')?.value || 'user'; 

  if (protectedRoutes.includes(pathname) && role !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url));  
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin'],  
};
