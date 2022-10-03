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
import TitleImg from "/public/images/titleImg.jpg";
import {
  VideoListContainer,
  VideoListContainerInnerWrapper,
} from "styles/channelDetail/VideoListContainerStyle";
import apisearchList from "src/pages/api/apisearchList";
import { aSerachList } from "states/atom";
import { useQuery } from "@tanstack/react-query";
import { isContext } from "vm";
import { SearchLoadingPage } from "src/components/Loading";


interface IProps {
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

const SearchPage = ({ searchList }:IProps) => {
  const router = useRouter();

  // const searchName = router.query.id?.toString();
  // const {
  //   data: searchList,
  //   error,
  //   status,
  // } = useQuery<ISearchItem[]>(
  //   ["searchList", searchName ],
  //   () => {
  //     return apisearchList(searchName);
  //   },
  // );

  // if (status === "loading") {
  //   return <span>Loading...</span>;
  // }

  // if (status === "error") {
  //   return <span>Error </span>;
  // }

  // useEffect(() => {
  //   apisearchList(searchName).then((data) => {
  //     setSearchList(data);
  //   });
  // }, [searchName]);

  

  return (
    <>
      <Head>
        <title>검색</title>
        <meta name="description" content="Generated by create next app" />
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
  const ide = context.params?.id as string
  const data = await apisearchList(ide)

  return {
    props: {
      searchList: data
    }
  }
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const data = await apisearchList(context.params.id);

//   return {
//     props: {
//       searchList: data,
//     },
//   };
// };
