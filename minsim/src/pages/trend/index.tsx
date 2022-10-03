import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import {DescribeText} from 'src/components/DescribeText'
import NavBar from 'src/components/NavBar'
import SimpleWordCloud from 'src/components/TrendList'
import { useQuery } from "@tanstack/react-query";

import { TrendSectionStyle } from 'styles/trend/SectionStyle'
import { WordCloudContainer } from 'styles/trend/WordcloudStyle'
import apitrendList from '../api/apitrendList'
import { GetServerSideProps } from 'next'
interface ITrendTag {
  text: string;
  value: number;
}

interface ITrendKeyword {
  text: string;
  value: number;
}

interface Iprops {
  _id: string;
  tags: ITrendTag[];
  keywords: ITrendKeyword[];
}



const TrendPage: NextPage<Iprops> = (trendList) => {
  const router = useRouter();
  console.log(trendList)
  // const {
  //   data: trendList,
  //   error,
  //   status,
  // } = useQuery<Iprops>(
  //   ["trendList"],
  //   () => {
  //     return apitrendList();
  //   },
  // );
  // if (status === "loading") {
  //   return <span>Loading...</span>;
  // }

  // if (status === "error") {
  //   return <span>Error </span>;
  // }
  

  return (
    <div>
      <Head>
        <title>Trend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <TrendSectionStyle>
          <DescribeText
              mainText='Trend Tag' 
              subText1='인기동영상의 태그입니다.'
              subText2='현재 인기동영상들의 모든 태그를 나타내고 있습니다.'/>
        </TrendSectionStyle>
        <WordCloudContainer>
          <SimpleWordCloud props={trendList?.tags}/>
        </WordCloudContainer>
        <TrendSectionStyle>
          <DescribeText
              mainText='Trend Keyword' 
              subText1='인기동영상의 키워드입니다.'
              subText2='현재 인기동영상 제목의 키워드를 나타내고 있습니다.'/>
        </TrendSectionStyle>
        <WordCloudContainer>
          <SimpleWordCloud props={trendList?.keywords}/>
        </WordCloudContainer>
      </main>
    </div>
  )
}

export default TrendPage



export async function getStaticProps() {
  const data = await apitrendList()
  return {
    props: {
      trendList: data,

    }

  }
}




// export const getServerSideProps:GetServerSideProps = async () => {
//   const data = await apitrendList()
  
//     return {
//     props: {
//       trendList: data
//     }
//   }
// }

