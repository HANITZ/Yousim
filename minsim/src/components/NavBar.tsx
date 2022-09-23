import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/yousimlogo.png";
import { useRouter } from "next/router";
import { NavLi, NavStyle, NavUl } from "styles/componentStyles/NavBarStyle";

function NavBar() {
  const router = useRouter();
  const routerpush = () => {
    router.push("/");
  };

  return (
    <NavStyle>
      <NavUl>
        <NavLi>
          <h3>Trend</h3>
        </NavLi>
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
    </NavStyle>
  );
}

export default NavBar;
