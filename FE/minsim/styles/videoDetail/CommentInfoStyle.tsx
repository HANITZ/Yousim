import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const MainInfoWrapper = styled.div``

export const CommentInfoTextWrapper = styled.div`
  margin-left: 36px;
  display:inline-block;
`

export const VideoInfoTextWrapper = styled.div`
  display:inline-block;
`

export const CommentInfoWrapper = styled.div`
  margin-top: 16px;
`

export const CommentTagWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const CommentTitle = styled.p`
  font-size: 21.4px;
`

export const CommentTimeInfo = styled.p`
  color: #A6A6A6;
`
export const CommentLiked = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`

export const VideoInfoContainer = styled.div`
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

export const VideoInfoImgTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
  p, h3 {
    display:inline-block;
  }
  ${media("<=tablet", ">phone")} {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`

export const CommentImgContainer = styled.div`
  min-width: 80px;
  min-height: 80px;
  width: 80px;
  height: 80px;

  ${media("<=desktop", ">tablet")} {
    min-width: 64px;
    min-height: 64px;
    width: 64px;
    height: 64px;
  }

  ${media("<=tablet", ">phone")} {
    min-width: 48px;
    min-height: 48px;
    width: 48px;
    height: 48px;
  }
`