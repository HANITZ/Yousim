

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ChannelBannerLoadingDiv, ChannelLoadingDiv, ChannelMainTextLoadingDiv, ChannelSubTextLoadingDiv, CommentLoadingDiv, SearchLoadingDiv, VideoBannerLoadingDiv } from 'styles/componentStyles/LoadingStyle';
import { SearchMarginDiv } from 'styles/searchStyles/SearchStyle';

export const SearchLoadingPage = () => {
  return (
    <SkeletonTheme baseColor="#31313C" highlightColor="#1c1c1f">
      <SearchMarginDiv />
      <SearchLoadingDiv>
        <Skeleton height={612}/> 
      </SearchLoadingDiv>
    </SkeletonTheme>
  )
}

export const ChannelLoadingPage = () => {
  return (
    <SkeletonTheme baseColor="#31313C" highlightColor="#1c1c1f">
      <SearchMarginDiv />
      <ChannelBannerLoadingDiv>
        <Skeleton height={'15vw'}/> 
      </ChannelBannerLoadingDiv>
      <ChannelLoadingDiv>
        <Skeleton height={'100%'}/> 
      </ChannelLoadingDiv>
      <ChannelMainTextLoadingDiv>
        <Skeleton height={'100%'}/> 
      </ChannelMainTextLoadingDiv>
      <ChannelSubTextLoadingDiv>
        <Skeleton height={'100%'}/> 
      </ChannelSubTextLoadingDiv>
      <ChannelMainTextLoadingDiv>
        <Skeleton height={'100%'}/> 
      </ChannelMainTextLoadingDiv>
      <ChannelSubTextLoadingDiv>
        <Skeleton height={'100%'}/> 
      </ChannelSubTextLoadingDiv>
  </SkeletonTheme>
  )
}

export const VideoLoadingPage = () => {
  return (
    <SkeletonTheme baseColor="#31313C" highlightColor="#1c1c1f">
      <SearchMarginDiv />
      <VideoBannerLoadingDiv>
        <Skeleton height={'100%'}/> 
      </VideoBannerLoadingDiv>
      <ChannelLoadingDiv>
        <Skeleton height={'100%'}/> 
      </ChannelLoadingDiv>
      <ChannelLoadingDiv>
        <Skeleton height={'100%'}/> 
      </ChannelLoadingDiv>
      <CommentLoadingDiv>
        <Skeleton height={'100%'}/> 
      </CommentLoadingDiv>
    </SkeletonTheme>
  )
}


export const TrendLoadingPage = () => {
  return (
    <SkeletonTheme baseColor="#31313C" highlightColor="#1c1c1f">
      <SearchMarginDiv />
      <ChannelMainTextLoadingDiv>
        <Skeleton height={'100%'}/> 
      </ChannelMainTextLoadingDiv>
      <ChannelSubTextLoadingDiv>
        <Skeleton height={'100%'}/> 
      </ChannelSubTextLoadingDiv>
      <ChannelSubTextLoadingDiv>
        <Skeleton height={'100%'}/> 
      </ChannelSubTextLoadingDiv>
      <SearchLoadingDiv>
        <Skeleton height={348}/> 
      </SearchLoadingDiv>
    </SkeletonTheme>
  )
}

