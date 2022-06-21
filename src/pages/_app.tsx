import '#/assets/scss/index.scss';

//* next
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { getCookie } from 'cookies-next';

//* dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import 'dayjs/locale/en';

//* react-query
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

//* redux-toolkit
import { wrapper } from '#/store/store';
import { switchTheme } from '#/store/slices/app.slice';
import { auth } from '#/store/slices/user.slice';

//* layouts wrappers
import type { ThemeVarious } from '#/contexts/theme';
import ThemeProvider from '#/contexts/theme';
import MainLayout from '#/layouts/Main.layout';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// App setup
//* ------------------------------------------------------------------------------------------ *//
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  dayjs.extend(relativeTime);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {}
      })
  );

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <DefaultSeo
        defaultTitle="NordClanVk"
        titleTemplate="%s • NordClanVk"
        description="🫀 NordClanVk"
      />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  const currentTheme = getCookie('__THEME__', {
    req: ctx.req
  });
  store.dispatch(switchTheme((currentTheme as ThemeVarious) || 'light'));

  const accessToken = getCookie('__ACCESS_TOKEN__', {
    req: ctx.req
  });
  if (accessToken) store.dispatch(auth(accessToken as string));

  return {
    pageProps: {
      ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {})
    }
  };
});

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // if (process.env.NODE_ENV === 'production') return;
  // console.log(metric);
}

export default appWithTranslation(wrapper.withRedux(MyApp));
