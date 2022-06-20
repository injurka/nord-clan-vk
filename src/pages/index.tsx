import React from 'react';
import { NextSeo } from 'next-seo';
// import useTheme from '#/hooks/useTheme';
import MainLayout from '#/layouts/Main.layout';
import type { GetServerSideProps } from 'next/types';
import { wrapper } from '#/store/store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home = () => {
  // const { themeContext, setThemeContext } = useTheme();

  return (
    <div>
      <NextSeo title="Home" description="Home page" />
      <div>
        <div>Index</div>
        {/* 
        <h1>{themeContext}</h1>
        <button type="button" onClick={() => setThemeContext('blue')}>
          BLUE
        </button>
        <button type="button" onClick={() => setThemeContext('light')}>
          LIGHT
        </button>
        <button type="button" onClick={() => setThemeContext('dark')}>
          DARK
        </button> 
        */}
      </div>
    </div>
  );
};

// Additional
//* ------------------------------------------------------------------------------------------ *//
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
      return {
        props: {
          ...(await serverSideTranslations(locale || '', ['common', 'home']))
        }
      };
    }
);

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
