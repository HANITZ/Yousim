import styled from "@emotion/styled";
import { VideoListContainerInnerWrapper } from "styles/channelDetail/VideoListContainerStyle";
import { SearchInfoImgTextWrapper } from "styles/searchStyles/SearchStyle";
import Image, { StaticImageData } from "next/image";
import { useRouter } from 'next/router';
import VideoTags from "./VideoTags";
import VideoInfo from "./VideoInfo";
import { useRecoilState } from 'recoil';
import { aChData } from "states/atom";


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
  const [chData, setChData] = useRecoilState(aChData)
  
    const onClick = () => {
      router.push({
        pathname: `/channel/${chData.id}/${video.id}`,
        query: {
          chId: chData.id,
          name: chData.name,
          video: chData.video,
          
          id: video.id,
          title: video.title,
          time: video.time, 
          view: video.view
        }
      })
  }

  return (
    <>
      {/* onclick */}
      <VideoListContainerInnerWrapper onClick={onClick}>
        <SearchInfoImgTextWrapper>
          <Image
            src={video.thumbnail}
            alt="채널 대표 이미지"
            width={"256px"}
            height={"128px"}
            objectFit='fill'
          />
          <VideoInfo title={`${video.title}`} sub1='아이유' sub2={`조회수 ${video.view?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${'\u00A0'}${'\u00A0'} |${'\u00A0'}${'\u00A0'}  ${video.time?.slice(0, 10)}`} ></VideoInfo>
        </SearchInfoImgTextWrapper>
        <VideoTags tags={video.tag} />
      </VideoListContainerInnerWrapper>
    </>
  );
};

export default ChannelVideo;

