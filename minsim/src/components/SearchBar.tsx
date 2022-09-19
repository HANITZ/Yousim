import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';
import theme from '../../styles/theme';

import search_black from '/public/images/search_black.png'
import Image from 'next/image';

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchInput = styled.input`
  position: relative;
  
  background-color: #fff;
  border: 0px;
  border-radius: 25px;
  min-height: 48px;
  min-width: 1080px;

  :hover {
    border: 2px solid #FF5349;
  }

  :focus {
    outline: 2px solid #FF5349;
  }
`

function SearchBar() :JSX.Element {
  const [inputText, setInputText] = useState("");
  const router = useRouter()
  const routerPush = () => {router.push(`/search/${inputText}`)}
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      routerPush()
    }
  }

  return (
    <NavDiv>
      <label htmlFor="search" />
      <SearchInput type="search" id="search" name="search" placeholder='채널을 검색해보세요.' value={inputText} onChange={(e) => {
        setInputText(e.target.value) 
      }} onKeyDown={onKeyDown}/>
      <button onClick={routerPush}>
        <Image src={search_black} alt="검색" width={32} height={32} />
      </button>
    </NavDiv>
)
}

export default SearchBar