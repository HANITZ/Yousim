import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
getBreakPoints();

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SearchMarginDiv } from 'styles/searchStyles/SearchStyle';

const ChannelBannerLoadingDiv = styled.div`
  width: 100vw;
  height: 15vw;
`
const ChannelLoadingDiv = styled.div`
  margin: 0px 64px 32px 64px;

  ${media(">desktop")} {
    margin: 0px 64px 16px 64px;
  }
  ${media("<=desktop", ">tablet")} {
    margin-left: 32px;
    margin-right: 32px;
  }
  ${media("<=tablet", ">phone")} {
    margin-left: 16px;
    margin-right: 16px;
  }
`

const TestPage = () => {  
  return (
    <SkeletonTheme baseColor="#31313C" highlightColor="#1c1c1f">
      <SearchMarginDiv />
      <ChannelBannerLoadingDiv>
        <Skeleton /> 
      </ChannelBannerLoadingDiv>
      <ChannelLoadingDiv>
        <Skeleton /> 
      </ChannelLoadingDiv>
    </SkeletonTheme>
  )
}

export default TestPage;