import React, { useEffect } from 'react';

//* next
import { NextSeo } from 'next-seo';
import type { GetServerSideProps, NextPage } from 'next/types';

// * redux
import { wrapper } from '#/store/store';

// * i18n
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { AUTH_TNS, COMMON_TNS } from '#/utils/i18n/consts';
import { vkAccessToken } from '#/utils';
import {
  AuthContentStyled,
  AuthLogOutStyled,
  AuthSignInStyled,
  AuthStyled
} from '#/styles/pages/auth.style';
import { useUser } from '#/hooks/store/user/useUser';
import { useTranslation } from 'next-i18next';

// Auth page
//* ------------------------------------------------------------------------------------------ *//
const Auth: NextPage = () => {
  const router = useRouter();
  const { isAuth, auth, logout } = useUser();
  const { t } = useTranslation([AUTH_TNS], { keyPrefix: 'auth' });

  useEffect(() => {
    if (isAuth) return;
    const matchToken = router.asPath.match(vkAccessToken);
    if (matchToken) {
      auth(matchToken[1]);
      router.push('/');
    }
  }, [router.asPath]);

  return (
    <>
      <NextSeo title={t('metaTitle')} description={t('metaTitle')} />
      <AuthStyled>
        <AuthContentStyled>
          {isAuth ? (
            <AuthLogOutStyled onClick={() => logout()} type="reset">
              {t('signOut')}
            </AuthLogOutStyled>
          ) : (
            <AuthSignInStyled href={process.env.VK_AUTH_URL}>{t('signIn')}</AuthSignInStyled>
          )}
        </AuthContentStyled>
      </AuthStyled>
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
          ...(await serverSideTranslations(locale || 'en', [COMMON_TNS, AUTH_TNS]))
        }
      };
    }
);

export default Auth;
