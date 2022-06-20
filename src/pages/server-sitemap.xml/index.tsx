/* eslint-disable @typescript-eslint/no-unsafe-return */

import { getServerSideSitemap } from 'next-sitemap';
import type { GetServerSideProps } from 'next';

type Changefreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export const getServerSideProps: GetServerSideProps = (ctx) => {
  const fields = [
    {
      loc: `${process.env.NEXT_SITE_URL as string}/server/`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as Changefreq,
      priority: 0.5
    }
  ];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
