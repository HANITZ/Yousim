import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const ChannelInfoContainer = styled.div`
  height: 192px;
  background-color: #31313C;
  border-radius: 0 0 10px 10px;
  padding: 32px 112px 32px 112px;
  margin: 0px 64px 16px 64px;

  ${media(">desktop")} {
    padding: 32px 112px 32px 112px;
    margin: 0px 64px 16px 64px;
  }
  ${media("<=desktop", ">tablet")} {
    padding: 32px 64px 32px 64px;
    margin-left: 32px;
    margin-right: 32px;
  }
  ${media("<=tablet", ">phone")} {
    padding: 32px 16px 32px 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
`

export const ChannelInfoContainerInnerWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ChannelInfoImgTextWrapper = styled.div`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
  p, h3 {
    display:inline-block;
  }
`