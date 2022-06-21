import React, { useEffect } from 'react';

//* next
import { NextSeo } from 'next-seo';
import type { GetServerSideProps, NextPage } from 'next/types';

// * redux
import { wrapper } from '#/store/store';

// * i18n
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { COMMON_TNS } from '../../utils/i18n/consts';

// Auth page
//* ------------------------------------------------------------------------------------------ *//
const Auth: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('rr', router.route);
    console.log('rq', router.query);
    console.log('r', router);
  }, []);

  const vkAuthLink =
    'https://oauth.vk.com/authorize?client_id=8198816&display=page&redirect_uri=https://localhost:3000/auth&scope=docs,offline&response_type=token&v=5.131';

  return (
    <>
      <NextSeo title="Home" description="Home page" />
      <div>
        <div>
          <a href={vkAuthLink}>AUTH</a>
          <input />
        </div>
      </div>
    </>
  );
};

// Additional
//* ------------------------------------------------------------------------------------------ *//
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ locale }) => {
      return {
        props: {
          ...(await serverSideTranslations(locale || 'en', [COMMON_TNS]))
        }
      };
    }
);

export default Auth;
