import styled from '@emotion/styled'

export const VideoMinsimContainer = styled.div`
  width: 100%;
  max-width: 1312px;
  height: 192px;
  
  background-color: #31313C;
  border-radius: 10px;
  padding: 32px 112px 32px 112px;
  margin: 0 auto 16px auto; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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