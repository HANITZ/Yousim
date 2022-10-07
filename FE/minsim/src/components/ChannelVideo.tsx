import styled from "@emotion/styled";
import { VideoListContainerInnerWrapper } from "styles/channelDetail/VideoListContainerStyle";
import { ChannelVideoImgContainer, SearchInfoImgTextWrapper } from "styles/searchStyles/SearchStyle";
import Image, { StaticImageData } from "next/image";
import { useRouter } from 'next/router';
import VideoTags from "./VideoTags";
import VideoInfo from "./VideoInfo";
import { useRecoilState } from 'recoil';
import { aChData, aVideo } from "states/atom";
import { useEffect } from 'react';

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
  const [videoData, setVideoData] = useRecoilState(aVideo(video.id))
  useEffect(() => {
    setVideoData({
      title: video.title,
      name: chData.name,
      time: video.time,
      view: video.view,
      videoId: video.id,
    })
  }, [])
  const onClick = () => {
    router.push({
      pathname: `/channel/${chData.id}/${video.id}`
    })
  }

  return (
    <>
      <VideoListContainerInnerWrapper onClick={onClick}>
        <SearchInfoImgTextWrapper>
          <ChannelVideoImgContainer>
            <Image
              src={video.thumbnail}
              alt="채널 대표 이미지"
              width={'160px'}
              height={'90px'}
            />
          </ChannelVideoImgContainer>
          <VideoInfo title={`${video.title}`} sub1={`${chData.name}`} sub2={`조회수 ${video.view?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${'\u00A0'}${'\u00A0'} |${'\u00A0'}${'\u00A0'}  ${video.time?.slice(0, 10)}`} ></VideoInfo>
        </SearchInfoImgTextWrapper>
        <VideoTags tags={video.tag} />
      </VideoListContainerInnerWrapper>
    </>
  );
};

export default ChannelVideo;

