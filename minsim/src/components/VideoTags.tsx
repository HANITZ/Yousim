import { ChannelTagWrapper, VideoTagWrapper } from "styles/componentStyles/ChannelInfoStyle";
import { Tag } from "styles/componentStyles/TagStyle";


interface ITag {
  tags: string[]
}


const VideoTags = ({tags}:ITag) => {
  return (
    <VideoTagWrapper>
      {tags.map((tag, index) => {
        return (
          <Tag key={index}>
            <p>{tag}</p>
          </Tag>
        )
      })}
    </VideoTagWrapper>
  );
};

export default VideoTags;
