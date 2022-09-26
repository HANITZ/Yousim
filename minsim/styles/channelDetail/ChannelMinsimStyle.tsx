import styled from '@emotion/styled'
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const ChannelMinsimTitle = styled.h3`
  color: #A6A6A6;
  margin: 96px 0px 16px 64px;
  ${media(">desktop")} {
    margin-left: 64px;
  }
  ${media("<=desktop", ">tablet")} {
    margin-left: 32px;
  }
  ${media("<=tablet", ">phone")} {
    margin-left: 16px;
  };
`

export const ChannelMinsimMainText = styled.h2`
  margin: 96px 0px 16px 64px;
  line-height: 140%;
  margin-block-start: 0;
  margin-block-end: 0;

  ${media(">desktop")} {
    font-size: 50.5px;
    margin-left: 64px;
  }
  ${media("<=desktop", ">tablet")} {
    font-size: 43.8px;
    margin-left: 32px;
  }
  ${media("<=tablet", ">phone")} {
    font-size: 37.5px;
    margin-left: 16px;
  };
`

