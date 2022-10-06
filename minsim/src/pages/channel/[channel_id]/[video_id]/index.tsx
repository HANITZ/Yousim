import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

<<<<<<< HEAD
import SearchBar from "src/components/SearchBar";
import NavBar from "src/components/NavBar";
import Banner from "styles/channelDetail/BannerStyle";

import ChannelInfo from "src/components/ChannelInfo";
import {
  ChannelInfoContainer,
  ChannelInfoContainerInnerWrapper,
  ChannelInfoImgTextWrapper,
  ImgDiv,
} from "styles/channelDetail/ChannelInfoContainerStyle";
import TitleImg from "/public/images/titleImg.jpg";
import Tags from "src/components/Tags";
import ChannelMinsimText from "src/components/ChannelMinsimText";
import VideoListTitle from "styles/channelDetail/VideoListSectionTitleStyle";
import {
  VideoListContainer,
  VideoListContainerInnerWrapper,
} from "styles/channelDetail/VideoListContainerStyle";
import VideoTags from "src/components/VideoTags";
import { useEffect, useState } from "react";
import VideoList from "src/components/VideoList";
import apiIniVideoList from "src/pages/api/apiIniVideoList";
import { useQuery } from "@tanstack/react-query";
import SearchList from "src/components/SearchList";
import { useRecoilState, useRecoilValue } from "recoil";
import { aChData } from "states/atom";
=======
import NavBar from 'src/components/NavBar'
import VideoInfo from 'src/components/VideoInfo'

import VideoFrame from 'styles/videoDetail/VideoFrameStyle'
import { ChannelInfoContainerInnerWrapper, ChannelInfoImgTextWrapper } from 'styles/channelDetail/ChannelInfoContainerStyle'
import { BadMinsim, GoodMinsim, MinsimTextWrapper, VideoMinsim, VideoMinsimContainer } from 'styles/videoDetail/VideoMinsimStyle'
import { VideoDetailContainerInnerWrapper, VideoListContainer } from 'styles/channelDetail/VideoListContainerStyle'
import { Rank1Tag, Rank2Tag, Rank3Tag } from 'styles/videoDetail/RankTagStyle'
import CommentInfo from 'src/components/CommentInfo'
import { CommentImgContainer, VideoInfoContainer, VideoInfoImgTextWrapper } from 'styles/videoDetail/CommentInfoStyle'
import { useEffect, useState } from 'react'
import apiIniVideoDetail from 'src/pages/api/apiVideoDetail'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import apiIniVideoComments from 'src/pages/api/apiVideoComments'
import { ChannelTagWrapper } from 'styles/componentStyles/ChannelInfoStyle'
import { Tag } from 'styles/componentStyles/TagStyle'
import { VideoLoadingPage } from 'src/components/Loading'
import FetchButton from 'src/components/FetchButton'
import VideoFetchButton from 'src/components/VideoFetchButton'
import { useRecoilState } from 'recoil'
import { aVideo } from 'states/atom'
>>>>>>> e31a72549600e2db175d7fde5771c950baa663e5

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
  view: number;
}

<<<<<<< HEAD
interface ISearchItem {
  id: string;
  banner: string;
  name: string;
  description: string;
  subscriber: number;
  video: number;
  thumbnail: string;
  time: string;
  view: number;
}

const ChannelDetailPage: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const [chData, setChData] = useRecoilState<ISearchItem>(aChData);
  const { data: videos, status } = useQuery<IVideo[]>(
    ["video", query.channel_id],
    () => {
      return apiIniVideoList(query.channel_id);
    }
  );
=======
const VideoDetailPage: NextPage = (props) => {

  const router = useRouter()
  const query = router.query

  const videoId = query.video_id as string
  const videoTitle = query.title?.toString();
  const [commentList, setCommentList] = useState<Array<commentData>>([])
  const [videoData, setVideoData] = useRecoilState(aVideo)

  // const [videoList, setVideoList] = useState<Array<videoData>>([])

  const {data, status} = useQuery(["videoData", videoId], ()=>{return apiIniVideoDetail(videoId)})
  const {data: commentData, status: commentStatus} = useQuery(["commentData", videoId], ()=>{return apiIniVideoComments(videoId)},{
    enabled: !!data
  }) 
  
  
  useEffect(() => {
    // if (typeof data === 'object') {setVideoList(data?.keywords.sort(((a: videoData, b: videoData) => {return b.value - a.value;})))}
    if (commentData !== 'undefined') {setCommentList(commentData?.sort(((a: commentData, b: commentData) => {return a.like - b.like;})))};
  }, [commentData, data])    
  
  
  if (status === "loading" || commentStatus === "loading") {
    return <VideoLoadingPage />
  }  
>>>>>>> e31a72549600e2db175d7fde5771c950baa663e5

  return (
    <div>
      <Head>
        <title>영상</title>
        <meta name="description" content={videoTitle} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <NavBar />
<<<<<<< HEAD
        <section>
          <Banner src={chData.banner} alt="배너" />
          <ChannelInfoContainer>
            <ChannelInfoContainerInnerWrapper>
              <ChannelInfoImgTextWrapper>
                <ImgDiv>
                  <Image
                    src={chData.thumbnail}
                    alt="채널 대표 이미지"
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "50%" }}
                  />
                </ImgDiv>
                <ChannelInfo
                  title={chData.name}
                  subscriber={chData.subscriber}
                  video={chData.video}
                  description={chData.description}
                ></ChannelInfo>
              </ChannelInfoImgTextWrapper>
              <Tags />
=======
        <VideoFrame src={`https://www.youtube.com/embed/${videoData.videoId}`}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
          <VideoInfoContainer>
            <ChannelInfoContainerInnerWrapper>
              <ChannelInfoImgTextWrapper>
                <VideoInfo title={`${videoData.title}`} sub1={`${videoData.name}`} sub2={`조회수 ${videoData.view?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${'\u00A0'}${'\u00A0'} |${'\u00A0'}${'\u00A0'}  ${videoData.time?.slice(0, 10)}`} ></VideoInfo>
              </ChannelInfoImgTextWrapper>
              <VideoFetchButton />
              {/* {typeof data === 'object' && videoList[0].text ?  <ChannelTagWrapper>
                <Tag>
                  <p>{videoList[0].text}</p>
                </Tag>
                <Tag>
                  <p>{videoList[1].text}</p>
                </Tag>
                <Tag>
                  <p>{videoList[2].text}</p>
                </Tag>
              </ChannelTagWrapper> : <>갱신 중</>} */}

>>>>>>> e31a72549600e2db175d7fde5771c950baa663e5
            </ChannelInfoContainerInnerWrapper>
          </ChannelInfoContainer>

<<<<<<< HEAD
          <ChannelMinsimText
            title="채널 민심"
            mainText="95%  떡상"
          ></ChannelMinsimText>
          <ChannelMinsimText
            title="가장 많이 언급된 키워드"
            mainText="특화는 이게 맞아"
          ></ChannelMinsimText>
        </section>
        <section>
          <VideoListTitle>채널 영상</VideoListTitle>
=======
          <VideoMinsimContainer>
          {typeof data === 'object' ? 
          <>
            <MinsimTextWrapper>
              <GoodMinsim>떡상 {data.ms.toFixed(0)}%</GoodMinsim>
              <BadMinsim>떡락 {100 - data.ms.toFixed(0)}%</BadMinsim>
            </MinsimTextWrapper>
            <VideoMinsim max={100} value={data.ms} />  
          </>
          : <>갱신 중</> }
          </VideoMinsimContainer>
>>>>>>> e31a72549600e2db175d7fde5771c950baa663e5

          <VideoList videos={videos} />
          <VideoListContainer>
<<<<<<< HEAD
            {/* <VideoListContainerInnerWrapper>
              <ChannelInfoImgTextWrapper>
                <Image
                  src={TitleImg}
                  alt="채널 대표 이미지"
                  width={"256px"}
                  height={"128px"}
                  objectFit="cover"
                  objectPosition="top"
                />
                <ChannelInfo
                  title="아이유"
                  sub1="구독자 127만명  |  동영상 6267개"
                  sub2="반갑습니다. 오늘도 즐거운 날입니다."
                ></ChannelInfo>
              </ChannelInfoImgTextWrapper>
              <VideoTags />
            </VideoListContainerInnerWrapper> */}
=======
            <h4>Best 댓글</h4>
            {commentList ? <>
              <VideoDetailContainerInnerWrapper>
                <Rank1Tag />
                <VideoInfoImgTextWrapper>
                  <CommentImgContainer>
                    <Image src={commentList[9].thumbnail}  alt='댓글 작성자의 프로필 대표 이미지' width={'80px'} height={'80px'} objectFit='cover' style={{borderRadius: '50%'}} />
                  </CommentImgContainer>
                  <CommentInfo name={commentList[9].name} publishedTime={commentList[9].time.slice(0, 10)} comment={commentList[9].content} liked={commentList[9].like.toString()} />
                </VideoInfoImgTextWrapper>
              </VideoDetailContainerInnerWrapper>
              <VideoDetailContainerInnerWrapper>
                <Rank2Tag />
                <VideoInfoImgTextWrapper>
                  <CommentImgContainer>
                    <Image src={commentList[8].thumbnail}  alt='댓글 작성자의 프로필 대표 이미지' width={'80px'} height={'80px'} objectFit='cover' style={{borderRadius: '50%'}} />
                  </CommentImgContainer>
                  <CommentInfo name={commentList[8].name} publishedTime={commentList[8].time.slice(0, 10)} comment={commentList[8].content} liked={commentList[8].like.toString()} />
                </VideoInfoImgTextWrapper>
              </VideoDetailContainerInnerWrapper>
              <VideoDetailContainerInnerWrapper>
                <Rank3Tag />
                <VideoInfoImgTextWrapper>
                  <CommentImgContainer>
                    <Image src={commentList[7].thumbnail}  alt='댓글 작성자의 프로필 대표 이미지' width={'80px'} height={'80px'} objectFit='cover' style={{borderRadius: '50%'}} />
                  </CommentImgContainer>
                  <CommentInfo name={commentList[7].name} publishedTime={commentList[7].time.slice(0, 10)} comment={commentList[7].content} liked={commentList[7].like.toString()} />
                </VideoInfoImgTextWrapper>
              </VideoDetailContainerInnerWrapper>
            </> : <></>
            }
>>>>>>> e31a72549600e2db175d7fde5771c950baa663e5
          </VideoListContainer>
        </section>
      </main>
    </div>
  );
};

<<<<<<< HEAD
export default ChannelDetailPage;
=======
export default VideoDetailPage


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const videoId = context.params?.video_id as string

//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery(["videoData", videoId], ()=>apiIniVideoDetail(videoId))
//   await queryClient.prefetchQuery(["commentData", videoId], ()=>apiIniVideoComments(videoId),
//   ) 

//   queryClient.setQueryData(["videoData", videoId], apiIniVideoDetail(videoId))
//   queryClient.setQueryData(["commentData", videoId], apiIniVideoComments(videoId))
//   console.log(queryClient.getQueryData(["commentData", videoId]))


//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: 86400
//   }
// }
>>>>>>> e31a72549600e2db175d7fde5771c950baa663e5
