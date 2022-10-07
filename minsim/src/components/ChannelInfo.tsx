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
  const convertSubscriber = () => {
    try {
      if (subscriber >= 100000000) {
        return `${subscriber /= 100000000}억명`
  
      } else if (subscriber >= 10000) {
        return `${subscriber /= 10000}만명`
  
      } else if (subscriber >= 1000) {
        return `${subscriber /= 1000}천명`
      } else {
        return `${subscriber}명`
      }
    } catch {
      return
    }
  }

  const convertDescription = () => {
    try {
      if (description.length >= 25) {
        return `${description.substring(0, 24)} ...`
      } else {
        return description
      }
    } catch {
      return
    }
  }

  return (
    <>
      <ChannelInfoTextWrapper>
        <h3>{title}</h3>
        <ChannelnfoWrapper>
          <p>구독자 {convertSubscriber()}{'\u00A0'}{'\u00A0'}|{'\u00A0'}{'\u00A0'}</p>
          <p>동영상 {video}개</p><br />
          <p>{convertDescription()}</p>
        </ChannelnfoWrapper>
      </ChannelInfoTextWrapper>
    </> 
  );
};

export default ChannelInfo;
