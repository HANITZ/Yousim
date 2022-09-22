import { ChannelTagWrapper } from 'styles/componentStyles/ChannelInfoStyle';
import { Tag } from 'styles/componentStyles/TagStyle';

export const Rank1Tag = () => {
  return (
      <Tag>
        <p>Best1</p>
      </Tag>
  );
};

export const Rank2Tag = () => {
  return (
    <ChannelTagWrapper>
      <Tag>
        <p>Best2</p>
      </Tag>
    </ChannelTagWrapper>
  );
};

export const Rank3Tag = () => {
  return (
    <ChannelTagWrapper>
      <Tag>
        <p>Best3</p>
      </Tag>
    </ChannelTagWrapper>
  );
};