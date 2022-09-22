import styled from '@emotion/styled';

export const IntroductionVideoContainer = styled.div`
  display:flex;
  flex-direction: row;
  min-width: 1088px;
  min-height: 412px;
  margin: 192px auto 0 auto;
  background-color: #000;
  
  // 위로 이동하며 로딩띄우고 양 옆 열리기, height 수정
`
// export const IntroductionVideo = styled.div`
//   min-width: 1088px;
//   min-height: 412px;
//   margin: 192px auto 0 auto;
//   background-color: #000;
// `

export const IntroductionDivAnimation1 = styled.div`
  width: 250px;
  min-height: 412px;
  /* margin: 192px auto 0 auto; */
  margin: 0 auto 0 0;
  background-color: #1C1C1F;
  /* z-index:1; */
`
export const IntroductionDivAnimation2 = styled.div`
  width: 250px;
  min-height: 412px;
  /* margin: 192px auto 0 auto; */
  margin: 0 0 0 auto;
  background-color: #1C1C1F;
  z-index: 1;
`