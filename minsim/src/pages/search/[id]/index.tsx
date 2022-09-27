import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { SearchInfoImgTextWrapper, SloganContainer } from 'styles/searchStyles/SearchStyle'

import SearchBar from 'src/components/SearchBar'
import NavBar from 'src/components/NavBar'
import ChannelInfo from 'src/components/ChannelInfo'
import SearchList from 'src/components/SearchList'
import { useEffect, useState } from 'react'
import TitleImg from '/public/images/titleImg.jpg'
import { VideoListContainer, VideoListContainerInnerWrapper } from 'styles/channelDetail/VideoListContainerStyle'
import apisearchList from 'src/pages/api/apisearchList'
import { useRecoilState } from 'recoil'
import { aSerachList } from 'states/atom'

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


const SearchPage: NextPage = () => {
  const router = useRouter()
  const searchName = router.query.id?.toString()
  const [searchList, setSearchList] = useRecoilState<ISearchItem[]>(aSerachList)



  useEffect(()=> {
    apisearchList(searchName)
    .then((data)=>{
      setSearchList(data)
    })
  }, [searchName])
  

  return (
    <>
      <Head>
        <title>검색</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <NavBar />
      <SearchBar />
      <main>

        <VideoListContainer>
        {/* VideoListContainerInnerWrapper 단위로 mapㄱㄱ */}
        <SearchList  datas={searchList} />
        </VideoListContainer>
      </main>
    </>
  )
}

export default SearchPage
