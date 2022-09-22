import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import apisearchList from "src/pages/api/apisearchList";
import SearchItem from './SearchItem'

const SearchListStyle = styled.div`
  display: flex;
  flex-direction: column;
`
const UlName = styled.ul`
  text-align : center;
`

interface ISearchList{
  key: number,
  id: number,
  name: string,
  description: string,
  subscriber: number,
  video: number,
  thumbnail: string,
}
interface Iprops{
  name?: string
}

function SearchList(props:Iprops) {
  const router =useRouter()
  const [searchList, setSearchList]= useState([])

  useEffect(()=> {
    console.log(props.name)
    apisearchList(props.name)
    .then()

  }, [])
  
  const searchData = [{
    id: 1,
    name: '아이유',
    description: '좋은 아침입니다.',
    subscriber: 123,
    video: 2134,
    thumbnail: 'https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0ef353e26595028b764a212eb2823e385cb1e725396ecde616d411518b6b003447'
  },
  {
    id: 2,
    name: 'IU',
    description: '좋은 새벽입니다.',
    subscriber: 321,
    video: 4213,
    thumbnail: 'https://dimg.donga.com/ugc/CDB/WOMAN/Article/62/aa/bd/43/62aabd4312a1d2738250.jpg'
  }]

  const searchLi = () => {
    searchData.map(({id, name, description, subscriber, video, thumbnail}) => {
      return (
        <SearchItem key={id} id={id} name={name} description={description} subscriber={subscriber} video={video} thumbnail={thumbnail}/>
      )
    })
  }

  return (
  <UlName>
    {
       searchData.map(({id, name, description, subscriber, video, thumbnail}) => {
        return (
          <SearchItem key={id} id={id} name={name} description={description} subscriber={subscriber} video={video} thumbnail={thumbnail}/>
        )
      })
    }
  </UlName>
)}

 export default SearchList;

