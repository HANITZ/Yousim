import React from 'react';
import { ChannelInfoTextWrapper, ChannelnfoWrapper } from 'styles/componentStyles/ChannelInfoStyle';


interface IChannelData{
  title: string,
  subscriber: number,
  video: number,
  description: string,
  // tags: [],
}

const ChannelInfo = ({title, subscriber, video, description}: IChannelData) => {
  return (
    <>
      <ChannelInfoTextWrapper>
        <h3>{title}</h3>
        <ChannelnfoWrapper>
          <p>{subscriber}</p><br/>
          <p>{video}</p>
          <p>{description}</p>
        </ChannelnfoWrapper>
      </ChannelInfoTextWrapper>
    </> 
  );
};

export default ChannelInfo;
