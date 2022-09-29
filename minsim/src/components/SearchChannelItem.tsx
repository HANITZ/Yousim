import { VideoListContainerInnerWrapper } from "styles/channelDetail/VideoListContainerStyle";
import { SearchImgDiv, SearchInfoImgTextWrapper, SearchListContainerInnerWrapper } from "styles/searchStyles/SearchStyle";
import Image from "next/image";
import ChannelInfo from "./ChannelInfo";
import { useRouter } from 'next/router';
import { useRecoilState } from "recoil";
import { aChData } from "states/atom";
import { useEffect } from "react";

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

const SearchChannelItem = ( data: ISearchItem) => {
  const router = useRouter()
  const [chData, setChData] = useRecoilState<ISearchItem>(aChData)
  
  // useEffect(()=>{
  //   setChData({
  //     id: data.id,
  //     banner: data.banner,
  //     name: data.name,
  //     description: data.description,
  //     subscriber: data.subscriber,
  //     video: data.video,
  //     thumbnail: data.thumbnail,
  //     time: data.time,
  //     view: data.view
  //   })
  // },[])
  
  const onClick = () => {
    setChData({
      id: data.id,
      banner: data.banner,
      name: data.name,
      description: data.description,
      subscriber: data.subscriber,
      video: data.video,
      thumbnail: data.thumbnail,
      time: data.time,
      view: data.view
    })
    router.push({
      pathname: `/channel/${data.id}`,

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




