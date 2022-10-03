import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const SearchLoadingDiv = styled.div`
  margin: 0px 64px 32px 64px;

  ${media(">desktop")} {
    margin: 0px 64px 16px 64px;
  }
  ${media("<=desktop", ">tablet")} {
    margin-left: 32px;
    margin-right: 32px;
  }
  ${media("<=tablet", ">phone")} {
    margin-left: 16px;
    margin-right: 16px;
  }
`