import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

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


interface commentData {
  content: string;
  like: number;
  minsim: string;
  name: string;
  thumbnail: string;
  time: string;
}
interface videoData {
  text: string;
  value: number;
}

const VideoDetailPage: NextPage = (props) => {

  const router = useRouter()
  const query = router.query

  const videoId = query.video_id as string
  const videoTitle = query.title?.toString();
  const [commentList, setCommentList] = useState<Array<commentData>>([])
  const [videoData, setVideoData] = useRecoilState(aVideo(videoId))

  const {data, status} = useQuery(["videoData", videoId], ()=>{return apiIniVideoDetail(videoId)})
  const {data: commentData, status: commentStatus} = useQuery(["commentData", videoId], ()=>{return apiIniVideoComments(videoId)},{
    enabled: !!data
  })   
  
  useEffect(() => {
    if (commentData !== 'undefined') {setCommentList(commentData?.sort(((a: commentData, b: commentData) => {return b.like - a.like;})))};   
  }, [commentData, data])    
  
  
  if (status === "loading" || commentStatus === "loading") {
    return <VideoLoadingPage />
  }  

  return (
    <div>
      <Head>
        <title>영상</title>
        <meta name="description" content={videoTitle} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <NavBar />
        <VideoFrame src={`https://www.youtube.com/embed/${videoData.videoId}`}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
          <VideoInfoContainer>
            <ChannelInfoContainerInnerWrapper>
              <ChannelInfoImgTextWrapper>
                <VideoInfo title={`${videoData.title}`} sub1={`${videoData.name}`} sub2={`조회수 ${videoData.view?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${'\u00A0'}${'\u00A0'} |${'\u00A0'}${'\u00A0'}  ${videoData.time?.slice(0, 10)}`} ></VideoInfo>
              </ChannelInfoImgTextWrapper>
              <VideoFetchButton />
            </ChannelInfoContainerInnerWrapper>
          </VideoInfoContainer>

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

          <VideoListContainer>
            <h4>Best 댓글</h4>
            {commentList ? <>
              <VideoDetailContainerInnerWrapper>
                <Rank1Tag />
                <VideoInfoImgTextWrapper>
                  <CommentImgContainer>
                    <Image src={commentList[0]?.thumbnail}  alt='댓글 작성자의 프로필 대표 이미지' width={'80px'} height={'80px'} objectFit='cover' style={{borderRadius: '50%'}} />
                  </CommentImgContainer>
                  <CommentInfo name={commentList[0]?.name} publishedTime={commentList[0]?.time.slice(0, 10)} comment={commentList[0]?.content} liked={commentList[0]?.like.toString()} />
                </VideoInfoImgTextWrapper>
              </VideoDetailContainerInnerWrapper>
              <VideoDetailContainerInnerWrapper>
                <Rank2Tag />
                <VideoInfoImgTextWrapper>
                  <CommentImgContainer>
                    <Image src={commentList[1]?.thumbnail}  alt='댓글 작성자의 프로필 대표 이미지' width={'80px'} height={'80px'} objectFit='cover' style={{borderRadius: '50%'}} />
                  </CommentImgContainer>
                  <CommentInfo name={commentList[1]?.name} publishedTime={commentList[1]?.time.slice(0, 10)} comment={commentList[1]?.content} liked={commentList[1]?.like.toString()} />
                </VideoInfoImgTextWrapper>
              </VideoDetailContainerInnerWrapper>
              <VideoDetailContainerInnerWrapper>
                <Rank3Tag />
                <VideoInfoImgTextWrapper>
                  <CommentImgContainer>
                    <Image src={commentList[2]?.thumbnail}  alt='댓글 작성자의 프로필 대표 이미지' width={'80px'} height={'80px'} objectFit='cover' style={{borderRadius: '50%'}} />
                  </CommentImgContainer>
                  <CommentInfo name={commentList[2]?.name} publishedTime={commentList[2]?.time.slice(0, 10)} comment={commentList[2]?.content} liked={commentList[2]?.like.toString()} />
                </VideoInfoImgTextWrapper>
              </VideoDetailContainerInnerWrapper>
            </> : <></>
            }
          </VideoListContainer>
      </main>
    </div>
  )
}

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
