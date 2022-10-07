import React from 'react';
import { ChannelnfoWrapper, VideoInfoTextWrapper } from 'styles/componentStyles/ChannelInfoStyle';


interface IChannelData{
  title: string,
  sub1: string,
  sub2: string,
  // tags: [],
}

const VideoInfo = ({title, sub1, sub2}: IChannelData) => {
  return (
    <>
      <VideoInfoTextWrapper>
        <h3>{title}</h3>
        <ChannelnfoWrapper>
          <p>{sub1}</p><br/>
          <p>{sub2}</p>
        </ChannelnfoWrapper>
      </VideoInfoTextWrapper>
    </> 
  );
};

export default VideoInfo;
