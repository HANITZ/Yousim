import styled from '@emotion/styled';

interface IImgSizeProps {
  width: any,
  height: any
}

export const ChannelImg = (props: IImgSizeProps) => styled.img`
  width: ${props.width};
  height: ${props.height};

`

export const ChannelInfoContainerInnerWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MainInfoWrapper = styled.div``

export const ChannelInfoTextWrapper = styled.div`
  margin-left: 62px;
`

export const ChannelnfoWrapper = styled.div`
  margin-top: 16px;
`

export const ChannelTagWrapper = styled.div`
  
`

