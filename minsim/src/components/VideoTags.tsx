import { ChannelTagWrapper, VideoTagWrapper } from "styles/componentStyles/ChannelInfoStyle";
import { Tag } from "styles/componentStyles/TagStyle";


interface ITag {
  tags: string[]
}


const VideoTags = ({tags}:ITag) => {
  const newRand = [tags[Math.floor(Math.random() * tags.length)], tags[Math.floor(Math.random() * tags.length)], tags[Math.floor(Math.random() * tags.length)], ]

  return (
    <VideoTagWrapper>
      {newRand.map((tag, index) => {
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
