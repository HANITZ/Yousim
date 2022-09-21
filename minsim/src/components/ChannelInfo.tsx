import React from 'react';
import { ChannelInfoTextWrapper, ChannelnfoWrapper } from 'styles/componentStyles/ChannelInfoStyle';


interface IChannelData{
  title: string,
  sub1: string,
  sub2: string,
  // tags: [],
}

const ChannelInfo = ({title, sub1, sub2}: IChannelData) => {
  return (
    <>
      <ChannelInfoTextWrapper>
        <h3>{title}</h3>
        <ChannelnfoWrapper>
          <p>{sub1}</p><br/>
          <p>{sub2}</p>
        </ChannelnfoWrapper>
      </ChannelInfoTextWrapper>
    </> 
  );
};

export default ChannelInfo;
