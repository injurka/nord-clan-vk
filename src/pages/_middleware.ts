import { matchIsMobile } from '#/utils';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  return res.cookie('isMobile', matchIsMobile(req.headers.get('user-agent') || '').toString());
}
