import React from 'react';

//* next & redux
import type { GetServerSideProps, NextPage } from 'next/types';
import { NextSeo } from 'next-seo';
import { wrapper } from '#/store/store';
import { api } from '#/utils/api';
import { loadDocs } from '#/store/slices/docs.slice';

//* i18n
import { useTranslation } from 'next-i18next';
import { COMMON_TNS, DOCUMENTS_TNS } from '#/utils/i18n/consts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

//* styles & components
import DocsList from '#/components/docs/docs-list.component';
import { DocsListControlStyle } from '#/styles/components/docs/docs.style';
import { HomeHeaderStyled, HomeStyled } from '#/styles/pages/home.style';

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home: NextPage = () => {
  const { t } = useTranslation([DOCUMENTS_TNS], { keyPrefix: 'docs' });

  return (
    <>
      <NextSeo title={t('metaTitle')} description={t('metaTitle')} />
      <HomeStyled>
        <HomeHeaderStyled>
          <h1>{t('title')}</h1>
          <hr />
          <DocsListControlStyle>
            {/* <div>
              <div>1</div>
              <div>2</div>
            </div>
            <div>
              <div>фильтры</div>
            </div> */}
          </DocsListControlStyle>
        </HomeHeaderStyled>
        <DocsList />
      </HomeStyled>
    </>
  );
};

// Additional
//* ------------------------------------------------------------------------------------------ *//
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale, res }) => {
      // ? If user not auth then redirect into auth page
      if (!store.getState().user.isAuth) {
        return {
          props: {},
          redirect: {
            destination: '/auth',
            permanent: false
          }
        };
      }

      // ? Fetch documents data
      const data = await api(res).docs.get({});
      if (data) store.dispatch(loadDocs(data));

      return {
        props: {
          ...(await serverSideTranslations(locale || 'en', [COMMON_TNS, DOCUMENTS_TNS]))
        }
      };
    }
);

export default Home;
