import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const IntroductionVideoContainer = styled.div`
  min-height: 412px;
  margin: 192px auto 0 auto;

  background-color: #000;

  ${media(">desktop")} {
    min-width: 1080px;
  }
  ${media("<=desktop", ">tablet")} {
    min-width: 768px;
  }
  ${media("<=tablet", ">phone")} {
    min-width: 360px;
  }

  // 위로 이동하며 로딩띄우고 양 옆 열리기, height 수정
`;