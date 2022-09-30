import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/yousimlogo.png";
import { useRouter } from "next/router";
import { NavLi, NavLiHidden, NavStyle, NavUl } from "styles/componentStyles/NavBarStyle";
import SearchBar from "./SearchBar";

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';

function NavBar() :JSX.Element {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const showAnim = gsap.from('#NavStyle', { 
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);
    
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });
  })

  const router = useRouter();
  const routerpush = () => {
    router.push("/");
  };

  return (
    <NavStyle id="NavStyle">
      <NavUl>
        <NavLiHidden>
          <h3>Trend</h3>
        </NavLiHidden>
        <NavLi>
          <h2>
            <Link href="/">유심</Link>
          </h2>
          {/* <Image src={Logo} alt="" width={100} height={50} onClick={routerpush}></Image> */}
          {/* <Image src={Logo} alt="" width={100} height={50} onClick={() => {router.push("/")}}></Image> */}
        </NavLi>
        <NavLi>
          <h3>
            <div onClick={routerpush}></div>
            <Link href="/trend">Trend</Link>
          </h3>
        </NavLi>
      </NavUl>
      <SearchBar/>
    </NavStyle>
  );
}

export default NavBar;
