import search_black from '/public/images/search_black.png'
import Image from 'next/image';
import { IntroductionNavBarContainer, IntroductionSearchBarContainer } from 'styles/mainStyles/IntroductionSearchBarStyle';



function IntroductionSearchBar() :JSX.Element {

  return (
    <IntroductionNavBarContainer>
      <IntroductionSearchBarContainer>
        <div/>
        <button>
          <Image src={search_black} alt="검색 예시" width={32} height={32} />
        </button>
      </IntroductionSearchBarContainer>
    </IntroductionNavBarContainer>
)
}

export default IntroductionSearchBar