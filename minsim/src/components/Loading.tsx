

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SearchLoadingDiv } from 'styles/componentStyles/LoadingStyle';
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

