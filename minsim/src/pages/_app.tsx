import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import { css, Global } from '@emotion/react';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import reset from 'styled-reset'


Sentry.init({
  dsn: "https://bf895e01895948d9b55d0bdc232962dd@o1409479.ingest.sentry.io/6745974",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Global
          styles={css`
            ${reset}
        `}
      />
        <Component {...pageProps} />
      </>
    )
}

export default MyApp
