import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { VideoListContainer } from "styles/channelDetail/VideoListContainerStyle";
import SearchChannelItem from "./SearchChannelItem";

const SearchListStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const UlName = styled.ul`
  text-align: center;
`;


interface IVideo {
    categoryId: number;
    channelTitle: string | null;
    comment: number;
    description: string;
    id: string;
    like: number;
    nextToken: string;
    tag: [];
    thumbnail: string;
    time: string;
    title: string;
    view: number
  }

interface Iprops {
    datas: IVideo[]
}


function VideoList({videos}: Iprops) {
  const router = useRouter();

  return (


    // <VideoListContainer>


    // </VideoListContainer>
    <UlName>
      {datas.map((data, index) => {
        return <SearchChannelItem key={index} {...data} />;
      })}
    </UlName>

  );
}

export default VideoList;