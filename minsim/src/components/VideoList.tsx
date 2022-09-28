import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { VideoListContainer } from "styles/channelDetail/VideoListContainerStyle";
import ChannelVideo from "./ChannelVideo";
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
    channelTitle: string;
    comment: number;
    description: string;
    id: string;
    like: number;
    nextToken: string;
    tag: string[];
    thumbnail: string;
    time: string;
    title: string;
    view: number
  }

interface Iprops {
    videos: IVideo[]
}


function VideoList({videos}: Iprops) {
  const router = useRouter();

  return (


    <VideoListContainer>
        {videos.map((video, index) => {
            return <ChannelVideo key={index} {...video} />
        })}
    </VideoListContainer>

  );
}

export default VideoList;