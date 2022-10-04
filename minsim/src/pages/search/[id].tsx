import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import Head from "next/head";
import Router, { useRouter } from "next/router";
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
import {
  VideoListContainer,
  VideoListContainerInnerWrapper,
} from "styles/channelDetail/VideoListContainerStyle";
import apisearchList from "src/pages/api/apisearchList";
import { aSerachList } from "states/atom";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { isContext } from "vm";
import { SearchLoadingPage } from "src/components/Loading";


interface Iprops {
  searchList: ISearchItem[]
}
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

const SearchPage = () => {
  const router = useRouter();
  const id = router.query.id as string
  const {data: searchList, status} = useQuery<ISearchItem[]>(["searchList", id],() => {return apisearchList(id);});


  if (status === "loading") {
    return <SearchLoadingPage />
  }

  return (
    <>
      <Head>
        <title>검색</title>
        <meta name="description" content="유심의 검색 페이지입니다. 원하시는 검색어를 활용해 검색해 주세요." />
        <link rel="icon" href="/favicon.png" />
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

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [
      {
        params: {
          id: "아이유"
        }
      }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["searchList", id], ()=>apisearchList(id))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 86400
  }
}

