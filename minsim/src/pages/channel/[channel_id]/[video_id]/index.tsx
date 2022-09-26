import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import TitleImg from '/public/images/titleImg.jpg'

import SearchBar from 'src/components/SearchBar'
import NavBar from 'src/components/NavBar'
import Tags from 'src/components/Tags'
import VideoInfo from 'src/components/VideoInfo'

import VideoFrame from 'styles/videoDetail/VideoFrameStyle'
import { ChannelInfoContainer, ChannelInfoContainerInnerWrapper, ChannelInfoImgTextWrapper } from 'styles/channelDetail/ChannelInfoContainerStyle'
import { BadMinsim, GoodMinsim, MinsimTextWrapper, VideoMinsim, VideoMinsimContainer } from 'styles/videoDetail/VideoMinsimStyle'
import { VideoListContainer, VideoListContainerInnerWrapper } from 'styles/channelDetail/VideoListContainerStyle'
import { Rank1Tag, Rank2Tag, Rank3Tag } from 'styles/videoDetail/RankTagStyle'
import CommentInfo from 'src/components/CommentInfo'


const VideoDetailPage: NextPage = () => {
  const router = useRouter()
  const query = router.query
  console.log(query)
  
  return (
    <div>
      <Head>
          <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <SearchBar />
        <VideoFrame src='https://player.vimeo.com/external/319226256.sd.mp4?s=15bd6bd5af266703564dcee166b1ae076659193a&profile_id=164&oauth2_token_id=57447761' title=''/>
        <ChannelInfoContainer>
            <ChannelInfoContainerInnerWrapper>
              <ChannelInfoImgTextWrapper>
                <VideoInfo title='노래' sub1='아이유' sub2='조회수 127만명  |  1일 전' ></VideoInfo>
              </ChannelInfoImgTextWrapper>
              <Tags />
            </ChannelInfoContainerInnerWrapper>
          </ChannelInfoContainer>

          <VideoMinsimContainer>
            <MinsimTextWrapper>
              {/* text에 값 넣기 */}
              <GoodMinsim>떡상 60%</GoodMinsim>
              <BadMinsim>떡락 40%</BadMinsim>
            </MinsimTextWrapper>
            {/* value에 값 넣기 */}
            <VideoMinsim max={100} value={60} />  
          </VideoMinsimContainer>

          <VideoListContainer>
            <h4>Best 댓글</h4>
            <VideoListContainerInnerWrapper>
              <ChannelInfoImgTextWrapper>
                <Image src={TitleImg}  alt='채널 대표 이미지' width={'77px'} height={'77px'} objectFit='cover' style={{borderRadius: '50%'}} />
                <CommentInfo name='아이유' publishedTime='5분 전' comment='반갑습니다. 오늘도 즐거운 날입니다.' liked='96' />
              </ChannelInfoImgTextWrapper>
              <Rank1Tag />
            </VideoListContainerInnerWrapper>
            <VideoListContainerInnerWrapper>
              <ChannelInfoImgTextWrapper>
                <Image src={TitleImg}  alt='채널 대표 이미지' width={'77px'} height={'77px'} objectFit='cover' style={{borderRadius: '50%'}} />
                <CommentInfo name='아이유' publishedTime='5분 전' comment='반갑습니다. 오늘도 즐거운 날입니다.' liked='96' />
              </ChannelInfoImgTextWrapper>
              <Rank2Tag />
            </VideoListContainerInnerWrapper>
            <VideoListContainerInnerWrapper>
              <ChannelInfoImgTextWrapper>
                <Image src={TitleImg}  alt='채널 대표 이미지' width={'77px'} height={'77px'} objectFit='cover' style={{borderRadius: '50%'}} />
                <CommentInfo name='아이유' publishedTime='5분 전' comment='반갑습니다. 오늘도 즐거운 날입니다.' liked='96' />
              </ChannelInfoImgTextWrapper>
              <Rank3Tag />
            </VideoListContainerInnerWrapper>
          </VideoListContainer>
      </main>
    </div>
  )
}

export default VideoDetailPage