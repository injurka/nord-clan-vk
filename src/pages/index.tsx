import React from 'react';
import { NextSeo } from 'next-seo';
import type { GetServerSideProps, NextPage } from 'next/types';
import { wrapper } from '#/store/store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { api } from '#/utils/api';
import { loadDocs } from '#/store/slices/docs.slice';
import { HomeHeaderStyled, HomeStyled } from '#/styles/pages/home.style';

import { DocsListControlStyle } from '#/styles/components/docs/docs.style';
import DocsList from '#/components/docs/docs-list.component';

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" description="Home page" />
      <HomeStyled>
        <HomeHeaderStyled>
          <h1>Documents</h1>
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
      const data = await api(res).docs.get({});
      if (data?.items) store.dispatch(loadDocs(data.items));

      return {
        props: {
          ...(await serverSideTranslations(locale || '', ['common', 'home']))
        }
      };
    }
);

export default Home;
