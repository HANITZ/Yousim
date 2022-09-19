import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/images/yousimlogo.png'
import { useRouter } from 'next/router';
import styled from "@emotion/styled";

const NavStyle = styled.nav`
    /* position : fixed;
    z-index : 1; */
    width : 100%;
`
const NavUl = styled.ul`
    display : flex;
    list-style : none;
    flex-direction : row;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
`

const NavLi = styled.li`
     display : inline-block;
     text-transform : uppercase;
` 

function NavBar() {
    const router = useRouter()
    const routerpush = () => {router.push("/")}
    return (
        <NavStyle>
            <NavUl>
                <NavLi></NavLi>
                <NavLi>
                    <Image src={Logo} alt="" width={100} height={50} onClick={routerpush}></Image>
                </NavLi>
                <NavLi>
                    <Link href="/trend">Trend</Link> 
                </NavLi>
            </NavUl>
        </NavStyle>
    )
}

export default NavBar