import styled from '@emotion/styled'
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const WordCloudContainer = styled.div`
  background-color: #31313C;
  border-radius: 10px;
  padding: 32px 112px 32px 112px;
  margin: 0px 64px 32px 64px;

  ${media(">desktop")} {
    padding: 32px 112px 32px 112px;
    margin: 0px 64px 16px 64px;
  }
  ${media("<=desktop", ">tablet")} {
    padding: 24px 64px 24px 64px;
    margin-left: 32px;
    margin-right: 32px;
  }
  ${media("<=tablet", ">phone")} {
    padding: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
`