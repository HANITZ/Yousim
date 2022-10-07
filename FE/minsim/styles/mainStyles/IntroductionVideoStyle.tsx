import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const IntroductionVideoContainer = styled.div`
  display:flex;
  flex-direction: row;
  min-width: 1088px;
  min-height: 412px;
  margin: 192px auto 0 auto;
  background-color: #000;
  height: 800px;

  ${media(">desktop")} {
    min-width: 1080px;
  }
  ${media("<=desktop", ">tablet")} {
    min-width: 768px;
  }
  ${media("<=tablet", ">phone")} {
    justify-content: center;
    min-width: 360px;
    margin: 192px 0 0 0;
  }

  // 위로 이동하며 로딩띄우고 양 옆 열리기, height 수정
`;

  // 위로 이동하며 로딩띄우고 양 옆 열리기, height 수정

export const IntroductionDivAnimation1 = styled.div`
  width: 250px;
  height: 800px;
  min-height: 412px;
  margin: 0 auto 0 0;
  background-color: #1C1C1F;
  flex-direction:row;
  ${media("<=tablet", ">phone")} {
    /* justify-content: start; */
    /* flex-direction: row-reverse; */
    width: 0px;
    margin: 0 0 0 0;
  }
`
export const IntroductionDivAnimation2 = styled.div`
  width: 250px;
  height: 800px;
  min-height: 412px;
  margin: 0 0 0 auto;
  background-color: #1C1C1F;
  flex-direction: row-reverse;
  ${media("<=tablet", ">phone")} {
    /* justify-content: end; */
    /* flex-direction: row; */
    width: 0px;
    margin: 0 0 0 0;
  }
`
