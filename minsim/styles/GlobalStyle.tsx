import { css } from '@emotion/react';

import media from 'css-in-js-media'
import { setBreakPoints } from 'css-in-js-media';
// import reset from 'styled-reset'

setBreakPoints({ desktop: 1440, tablet: 768, phone: 360});

const globalStyle = css`
  * {
    font-family: 'Pretendard';
  }
  h1 {
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;

    ${media(">desktop")} {
      font-size: 50.5px;
    }
    ${media("<=desktop", ">tablet")} {
      font-size: 43.8px;
    }
    ${media("<=tablet", ">phone")} {
      font-size: 37.5px;
    }
  }
  h2 {
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;

    ${media(">desktop")} {
      font-size: 37.9px;
    }
    ${media("<=desktop", ">tablet")} {
      font-size: 32.9px;
    }
    ${media("<=tablet", ">phone")} {
      font-size: 28.2px;
    }
  }
  h3 {
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;

    ${media(">desktop")} {
      font-size: 28.4px;
    }
    ${media("<=desktop", ">tablet")} {
      font-size: 24.7px;
    }
    ${media("<=tablet", ">phone")} {
      font-size: 21.2px;
    }
  }
  h4 {
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;

    ${media(">desktop")} {
      font-size: 21.3px;
    }
    ${media("<=desktop", ">tablet")} {
      font-size: 18.6px;
    }
    ${media("<=tablet", ">phone")} {
      font-size: 15.9px;
    }
  }
  p {
    line-height: 160%;
    font-weight: 400;
    margin-block-start: 0;
    margin-block-end: 0;

    ${media(">desktop")} {
      font-size: 16px;
    }
    ${media("<=desktop", ">tablet")} {
      font-size: 15px;
    }
    ${media("<=tablet", ">phone")} {
      font-size: 12px;
    }
  }
`

export default globalStyle;