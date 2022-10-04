

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ChannelBannerLoadingDiv, ChannelLoadingDiv, ChannelMainTextLoadingDiv, ChannelSubTextLoadingDiv, SearchLoadingDiv } from 'styles/componentStyles/LoadingStyle';
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
      <SearchLoadingDiv>
        <Skeleton height={612}/> 
      </SearchLoadingDiv>
    </SkeletonTheme>
  )
}

