import React, { useState } from 'react';
import { useRouter } from 'next/router';

import search_black from '/public/images/search_black.png'
import Image from 'next/image';

import { NavDiv, Label } from 'styles/componentStyles/SearchBarStyle';


function SearchBar() :JSX.Element {
  const [inputText, setInputText] = useState("");
  const router = useRouter()
  const routerPush = () => {
    router.push({
      pathname: "/search/[id]",
      query: {id: 'channelId'},
    })
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      routerPush()
    }
  }

  return (
    <NavDiv>
      <Label htmlFor="search" >
        <input type="search" id="search" name="search" value={inputText} onChange={(e) => {
          setInputText(e.target.value) 
        }} onKeyDown={onKeyDown}/>
        <button onClick={routerPush}>
          <Image src={search_black} alt="검색" width={32} height={32} />
        </button>
      </Label>
    </NavDiv>
)
}

export default SearchBar