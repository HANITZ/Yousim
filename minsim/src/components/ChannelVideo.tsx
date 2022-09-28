import styled from "@emotion/styled";
import { VideoListContainerInnerWrapper } from "styles/channelDetail/VideoListContainerStyle";
import { SearchInfoImgTextWrapper } from "styles/searchStyles/SearchStyle";
import Image, { StaticImageData } from "next/image";
import ChannelInfo from "./ChannelInfo";
import { useRouter } from 'next/router';
import VideoTags from "./VideoTags";


const LiDescription = styled.li`
  color: black;
`;
const LiSubscriber = styled.li`
  color: black;
`;

const LiVideo = styled.li`
  color: black;
`;
const LiThumbnail = styled.li``;

interface IVideo {
    categoryId: number;
    channelTitle: string;
    comment: number;
    description: string;
    id: string;
    like: number;
    nextToken: string;
    tag: string[];
    thumbnail: string;
    time: string;
    title: string;
    view: number
  }

const ChannelVideo = (video: IVideo) => {
    const router = useRouter()
    const onClick = () => {
    // router.push({
    //   pathname: `/channel/${data.id}`,
    //   query: {
    //     banner: data.banner,
    //     name: data.name,
    //     subscriber: data.subscriber,
    //     video: data.video,
    //     thumbnail: data.thumbnail,
    //     description: data.description,
    //   }
    // })
  }
  



  return (
    <>
      <VideoListContainerInnerWrapper onClick={onClick} >
        <SearchInfoImgTextWrapper>
          <Image
            src={video.thumbnail}
            alt="채널 대표 이미지"
            width={"188px"}
            height={"188px"}
            objectFit="cover"
            style={{ borderRadius: "50%" }}
          />
          {/* <ChannelInfo
            title={video.title}
            video={data.video}
            description={data.description}
          ></ChannelInfo> */}
        </SearchInfoImgTextWrapper>
        <VideoTags tags={video.tag} />
      </VideoListContainerInnerWrapper>
      ;
    </>
  );
};

export default ChannelVideo;

