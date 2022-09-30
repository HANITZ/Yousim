import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const MainInfoWrapper = styled.div``

export const ChannelInfoTextWrapper = styled.div`
  display:inline-block;

  ${media(">desktop")} {
    margin-left: 64px;
  }
  ${media("<=desktop", ">tablet")} {
    margin-left: 32px;
  }
  ${media("<=tablet", ">phone")} {
    margin-top: 16px;
  }
`

export const VideoInfoTextWrapper = styled.div`
  display:inline-block;
  ${media(">desktop")} {
    margin-left: 64px;
  }
  ${media("<=desktop", ">tablet")} {
    margin-left: 32px;
  }
  ${media("<=tablet", ">phone")} {
    margin-left: 16px;
  }
`

export const ChannelnfoWrapper = styled.div`
  margin-top: 16px;
`

export const ChannelTagWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 16px;
`

export const VideoTagWrapper = styled.div`
  height: 128px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${media("<=desktop", ">tablet")} {
    height: 128px;
    margin-left: 32px;
    flex-direction: column;
  }
  ${media("<=tablet", ">phone")} {
    width: 100%;
    height: auto;
    margin-top: 16px;
    flex-direction: row;
  }
`

