import '#/assets/scss/index.scss';

//* next
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';

//* react-query
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

//* redux-toolkit
import { wrapper } from '#/store/store';

//* Layouts wrappers
import type { ThemeVarious } from '#/contexts/theme';
import ThemeProvider from '#/contexts/theme';
import { getCookie } from 'cookies-next';
import { switchTheme } from '#/store/app.slice';
import { authUser } from '#/store/user.slice';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// App setup
//* ------------------------------------------------------------------------------------------ *//
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
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
            <Component {...pageProps} />
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

  const accessToken = getCookie('__ACCESS_TOKEN__', {
    req: ctx.req
  });

  store.dispatch(switchTheme(currentTheme as ThemeVarious));
  store.dispatch(authUser(accessToken as string));

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
