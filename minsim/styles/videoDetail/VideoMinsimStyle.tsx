import styled from '@emotion/styled'
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const VideoMinsimContainer = styled.div`
  /* max-width: 1312px; */
  
  background-color: #31313C;
  border-radius: 10px;
  margin: 0 auto 16px auto; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media(">desktop")} {
    height: 192px;
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
export const MinsimTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const GoodMinsim = styled.h4`
  color: #309DFF;
`

export const BadMinsim = styled.h4`
  color: #FF5349;
`

export const VideoMinsim = styled.progress`
  width: 100%;
`

/*
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();
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
*/