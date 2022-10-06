import "../../styles/globals.css";
import type { AppProps } from "next/app";

import { Global, css } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import theme from "styles/theme";
import globalStyle from "styles/GlobalStyle";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { RecoilRoot } from "recoil";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { NextPageContext } from "next";

Sentry.init({
  dsn: "https://bf895e01895948d9b55d0bdc232962dd@o1409479.ingest.sentry.io/6745974",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const queryClient = new QueryClient();


type HydrateProps = {
  dehydratedState?: DehydratedState
}

type ExtendedAppProps<P = {}> = {
  err?: NextPageContext['err'];
} & AppProps<P>;


function MyApp({ Component, pageProps, err }: ExtendedAppProps<HydrateProps>) {
  return (
    <RecoilRoot  >
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <Global
              styles={css`
                ${globalStyle};
              `}
            />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
