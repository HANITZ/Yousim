import {ChannelMinsimMainText, ChannelMinsimTitle, } from 'styles/channelDetail/ChannelMinsimStyle'

interface IChannelMinsimText{
  title: string,
  mainText: string,
  // tags: [],
}

const ChannelMinsimText = ({title, mainText}: IChannelMinsimText) => {
  return (
    <>
      <ChannelMinsimTitle>{title}</ChannelMinsimTitle>
      <ChannelMinsimMainText>{mainText}</ChannelMinsimMainText>
    </>
  ) 
}

export default ChannelMinsimText