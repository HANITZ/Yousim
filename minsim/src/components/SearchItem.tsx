import Link from 'next/link';
import styled from '@emotion/styled';


const LiDescription = styled.li`
  color : black;
`
const LiSubscriber = styled.li`
  color : black;
`

const LiVideo = styled.li`
  color : black;
`
const LiThumbnail = styled.li`
`

interface ISearchItem{
  key: number,
  id: number,
  name: string,
  description: string,
  subscriber: number,
  video: number,
  thumbnail: string,
}


const SearchItem = ({ id, name, description, subscriber, video, thumbnail} : ISearchItem) => {
  
  return (
    <>
          {name}
          <LiDescription>{description}</LiDescription>
          <LiSubscriber>{subscriber}</LiSubscriber>
          <LiVideo>{video}</LiVideo>
          <LiThumbnail>{thumbnail}</LiThumbnail>

    </>
    )
  }

export default SearchItem;