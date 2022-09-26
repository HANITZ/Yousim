import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/yousimlogo.png";
import { useRouter } from "next/router";
import { NavLi, NavLiHidden, NavStyle, NavUl } from "styles/componentStyles/NavBarStyle";
import SearchBar from "./SearchBar";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';

function NavBar() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'SearchBar--scrolled', targets: '#SearchBar'}
  });
  useEffect(() => {
    gsap.to('#SeachBar', {
      scrollTrigger: {
        trigger: "#SloganContainer",
        markers: true,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
      },
      x: -300, duration: 4
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
          <h2>유심</h2>
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
      <SearchBar id='SearchBar'/>
    </NavStyle>
  );
}

export default NavBar;
