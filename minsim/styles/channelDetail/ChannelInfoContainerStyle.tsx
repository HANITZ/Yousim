import styled from '@emotion/styled';

export const ChannelInfoContainer = styled.div`
  width: 100%;
  max-width: 1312px;
  height: 192px;
  background-color: #31313C;
  border-radius: 0 0 10px 10px;
  padding: 32px 112px 32px 112px;
  margin: 0 auto 16px auto;
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
  align-items: center;
  
  p, h3 {
    display:inline-block;
  }
`