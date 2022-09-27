import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const Tag = styled.div`
  height: 32px;
  background-color: #1C1C1F;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media(">desktop")} {
    width: 78px;
  }
  ${media("<=desktop", ">tablet")} {
    width: 62px;
  }
  ${media("<=tablet", ">phone")} {
    width: 46px;
  }
`