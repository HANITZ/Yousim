import Link from 'next/link';
import styled from '@emotion/styled';

const UlName = styled.li`
  text-align : center;
`
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


const SearchItem = ({key, id, name, description, subscriber, video, thumbnail} : ISearchItem) => {
  
  return (
    <>
        <UlName>{name}
          <LiDescription>{description}</LiDescription>
          <LiSubscriber>{subscriber}</LiSubscriber>
          <LiVideo>{video}</LiVideo>
          <LiThumbnail>{thumbnail}</LiThumbnail>
        </UlName>
    </>
    )
  }

export default SearchItem;