import { matchIsMobile } from '#/utils';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  res.cookie('isMobile', matchIsMobile(req.headers.get('user-agent') || '').toString());

  const locale = req.headers.get('accept-language')?.split(',')?.[0] || 'en';
  const cookie = req.cookies[locale];

  if (!cookie && locale) return res.cookie('locale', locale);

  return res.cookie('locale', locale);
}
