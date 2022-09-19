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

const Label = styled.label`
  position: relative;

  input {
    position: relative;
    background-color: #fff;
    border-radius: 25px;
    min-height: 48px;
    min-width: 1080px;

    :hover {
      border: 4px solid #FF5349;
    }

    :focus {
      border: 4px solid #FF5349;
      outline: none;
    }
  }

  button {
    padding: 0;
    border: none;
    background-color: #fff;
    position: absolute;
    top: 8px;
    right: 16px;
    cursor: pointer;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

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