import { wrapper } from '#/store/store';
import { COMMON_TNS } from '#/utils/i18n/consts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps, NextPage } from 'next/types';

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Error: NextPage = () => {
  return (
    <div>
      <h1> ¯\_(ツ)_/¯ </h1>
    </div>
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

export default Error;
