import React from 'react';
import { ChannelInfoContainerInnerWrapper, ChannelInfoTextWrapper, ChannelnfoWrapper, ChannelTagWrapper } from 'styles/componentStyles/ChannelInfoStyle';
import { Tag } from 'styles/componentStyles/TagStyle';

interface IChannelData{
  title: string,
  sub1: string,
  sub2: string,
  // tags: [],
}

const ChannelInfo = ({title, sub1, sub2}: IChannelData) => {
  return (
    <ChannelInfoContainerInnerWrapper>
      {/* 이미지 줄려고 묶기 */}
        {/* 이미지 */}
        <ChannelInfoTextWrapper>
          <h3>{title}</h3>
          <ChannelnfoWrapper>
            <p>{sub1}</p>
            <p>{sub2}</p>
          </ChannelnfoWrapper>
        </ChannelInfoTextWrapper>

      <ChannelTagWrapper>
        <Tag>
          {/* {tags.map} */}
          <p>asd</p>
        </Tag>
      </ChannelTagWrapper>
    </ChannelInfoContainerInnerWrapper>
  );
};

export default ChannelInfo;
