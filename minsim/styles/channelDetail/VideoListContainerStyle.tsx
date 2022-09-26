import styled from '@emotion/styled'
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const VideoListContainer = styled.div`
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

export const VideoListContainerInnerWrapper = styled.div`
  width: 100%; 
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 45px 0 45px 0;

  ${media("<=tablet", ">phone")} {
    flex-direction: column;
  }
`

export const VideoDetailContainerInnerWrapper = styled.div`
  width: 100%; 
  height: 100%;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  margin: 45px 0 45px 0;

  ${media("<=tablet", ">phone")} {
    flex-direction: column;
  }
`