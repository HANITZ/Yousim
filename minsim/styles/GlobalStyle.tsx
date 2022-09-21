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
    font-size: 50.5px;
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  h2 {
    /* font-size: 37.9px; */
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;

    ${media(">desktop")} {
    font-size: 37.9px;
    }
    ${media("<=desktop", ">tablet")} {
      font-size: 20px;
    }
    ${media("<=tablet", ">phone")} {
      font-size: 10px;
    }
  }
  h3 {
    font-size: 28.4px;
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  h4 {
    font-size: 21.3px;
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  p {
    font-size: 16x;
    line-height: 160%;
    font-weight: 400;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`

export default globalStyle;