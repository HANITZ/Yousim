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
    margin-left: 16px;
  }
`

export const VideoInfoTextWrapper = styled.div`
  display:inline-block;
`

export const ChannelnfoWrapper = styled.div`
  margin-top: 16px;
`

export const ChannelTagWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

