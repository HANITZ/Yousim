import { VideoListContainerInnerWrapper } from "styles/channelDetail/VideoListContainerStyle";
import { SearchImgDiv, SearchInfoImgTextWrapper, SearchListContainerInnerWrapper } from "styles/searchStyles/SearchStyle";
import Image from "next/image";
import ChannelInfo from "./ChannelInfo";
import { useRouter } from 'next/router';
import { useRecoilState } from "recoil";

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
  // const [chData, setChData] = useRecoilState<ISearchItem>()
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
      <SearchListContainerInnerWrapper onClick={onClick} >
        <SearchInfoImgTextWrapper>
          <SearchImgDiv>
            <Image
              src={data.thumbnail}
              alt="채널 대표 이미지"
              layout='fill'
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
          </SearchImgDiv>
          <ChannelInfo
            title={data.name}
            subscriber={data.subscriber} 
            video={data.video}
            description={data.description}
          ></ChannelInfo>
        </SearchInfoImgTextWrapper>
      </SearchListContainerInnerWrapper>
    </>
  );
};

export default SearchChannelItem;




