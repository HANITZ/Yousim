import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  SearchInfoImgTextWrapper,
  SearchMarginDiv,
  SloganContainer,
} from "styles/searchStyles/SearchStyle";

import SearchBar from "src/components/SearchBar";
import NavBar from "src/components/NavBar";
import ChannelInfo from "src/components/ChannelInfo";
import SearchList from "src/components/SearchList";
import { useEffect, useLayoutEffect, useState } from "react";
import TitleImg from "/public/images/titleImg.jpg";
import {
  VideoListContainer,
  VideoListContainerInnerWrapper,
} from "styles/channelDetail/VideoListContainerStyle";
import apisearchList from "src/pages/api/apisearchList";
import { aSerachList } from "states/atom";
import { useQuery } from "@tanstack/react-query";

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
  const router = useRouter();
  const searchName = router.query.id?.toString();
  
  const {
    data: searchList,
    error,
    status,
  } = useQuery<ISearchItem[]>(
    ["searchList", searchName ],
    () => {
      return apisearchList(searchName);
    },
  );
  console.log(status);
  


  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error </span>;
  }

  // useEffect(() => {
  //   apisearchList(searchName).then((data) => {
  //     setSearchList(data);
  //   });
  // }, [searchName]);

  return (
    <>
      <Head>
        <title>검색 상세</title>
        <meta name="description" content="유심의 검색 상세 페이지입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <SearchMarginDiv />
        <VideoListContainer>
          {searchList ? <SearchList datas={searchList} /> : <></>}
        </VideoListContainer>
      </main>
    </>
  );
};

export default SearchPage;
