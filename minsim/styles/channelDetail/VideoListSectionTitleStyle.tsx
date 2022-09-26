import styled from '@emotion/styled'
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

const VideoListTitle = styled.h1`

${media(">desktop")} {
    margin: 128px 0px 32px 64px;
    font-size: 37.9px;
  }
  ${media("<=desktop", ">tablet")} {
    font-size: 32.9px;
    margin: 128px 0px 32px 32px;
  }
  ${media("<=tablet", ">phone")} {
    font-size: 28.2px;
    margin: 128px 0px 32px 16px;
  }
`

export default VideoListTitle