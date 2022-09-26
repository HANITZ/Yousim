import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import { Global, css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';
import globalStyle from 'styles/GlobalStyle';

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";


Sentry.init({
  dsn: "https://bf895e01895948d9b55d0bdc232962dd@o1409479.ingest.sentry.io/6745974",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});


function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    import('../mocks');
  }
  
  return (
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            ${globalStyle};
        `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    )
}

export default MyApp
