import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import search_black from '/public/images/search_black.png'
import Image from 'next/image';

import { NavDiv, Label } from 'styles/componentStyles/SearchBarStyle';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';

function SearchBar() :JSX.Element {
  // gsap.registerPlugin(ScrollTrigger);
  // ScrollTrigger.create({
  //   start: 'top -80',
  //   end: 99999,
  //   toggleClass: {className: 'SearchBar--scrolled', targets: '#navdiv'}
  // });
  // useEffect(() => {
  //   gsap.to('#navdiv', {
  //     scrollTrigger: {
  //       trigger: "#SeachBar",
  //       markers: true,
  //       start: "top top",
  //       end: "+=1000",
  //       scrub: true,
  //       pin: true,
  //     },
  //     y: -800, duration: 4
  //     });
    
  // })
  const [inputText, setInputText] = useState("");
  const router = useRouter()
  const routerPush = () => {
    router.push({
      pathname: `/search/${inputText}`,
      
    })
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      routerPush()
    }
  }

  return (
    <NavDiv id="navdiv">
      <Label htmlFor="search">
        <input type="search" id="search" name="search" value={inputText} onChange={(e) => {
          setInputText(e.target.value) 
        }} onKeyDown={onKeyDown}/>
        <button id="seachbutton" onClick={routerPush}>
          <Image src={search_black} alt="검색" width={32} height={32} />
        </button>
      </Label>
    </NavDiv>
)
}

export default SearchBar