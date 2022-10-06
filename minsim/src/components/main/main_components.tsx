import React from 'react'
import WordCloud from '/public/images/wordCloud.jpg'
import { DescribeText } from 'src/components/DescribeText'
import { ImgFrameContainer } from 'styles/mainStyles/ImgFrameStyle'
import Image from "next/image";


const main_components = () => {
  return (
    <section id="TrendImgStart">
      <DescribeText 
        mainText='트렌드 서칭' 
        subText1='채널을 검색해보세요.'
        subText2='다양한 정보가 당신을 기다리고 있습니다.'/>
      <ImgFrameContainer id="TrendImg">
        <Image src={WordCloud} alt="워드클라우드 예시"/>
      </ImgFrameContainer>
    </section>
  )
}

export default main_components