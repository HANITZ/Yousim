import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const SloganContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 210px;
  margin-bottom: 64px;
  
  ${media(">desktop")} {
    margin-left: 64px;
    margin-right: 64px;
  }
  ${media("<=desktop", ">tablet")} {
    min-width: 32px;
  }
  ${media("<=tablet", ">phone")} {
    margin-left: 16px;
    margin-right: 16px;
  }
`
