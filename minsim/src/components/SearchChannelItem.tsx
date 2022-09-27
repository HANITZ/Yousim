import styled from "@emotion/styled";
import { VideoListContainerInnerWrapper } from "styles/channelDetail/VideoListContainerStyle";
import { SearchInfoImgTextWrapper } from "styles/searchStyles/SearchStyle";
import Image, { StaticImageData } from "next/image";
import ChannelInfo from "./ChannelInfo";
import { useRouter } from 'next/router';


const LiDescription = styled.li`
  color: black;
`;
const LiSubscriber = styled.li`
  color: black;
`;

const LiVideo = styled.li`
  color: black;
`;
const LiThumbnail = styled.li``;

interface ISearchItem {
    key: number;
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

const SearchChannelItem = ( data: ISearchItem) => {
  const router = useRouter()

  const onClick = () => {
    router.push({
      pathname: `/channel/${data.id}`,
      query: {
        banner: data.banner,
        name: data.name,
        subscriber: data.subscriber,
        video: data.video,
        thumbnail: data.thumbnail,
        description: data.description,
      }
    })
  }
  



  return (
    <>

      <VideoListContainerInnerWrapper onClick={onClick} >
        <SearchInfoImgTextWrapper>
          <Image
            src={data.thumbnail}
            alt="채널 대표 이미지"
            width={"188px"}
            height={"188px"}
            objectFit="cover"
            style={{ borderRadius: "50%" }}
          />
          <ChannelInfo
            title={data.name}
            subscriber={data.subscriber} 
            video={data.video}
            description={data.description}
          ></ChannelInfo>
        </SearchInfoImgTextWrapper>
      </VideoListContainerInnerWrapper>
      ;
    </>
  );
};

export default SearchChannelItem;




