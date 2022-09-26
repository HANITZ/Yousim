import styled from '@emotion/styled';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const NavStyle = styled.nav`
    z-index: 9999;
    position : fixed;
    top: 0px;
    left: 0px;
    padding: 0 64px 0 64px;
    width : 100%;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #A6A6A6;
`
export const ChangeNavStyle = styled.nav`
    height: 32px;
`
export const NavUl = styled.ul`
    display : flex;
    list-style : none;
    flex-direction : row;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
`

export const NavLi = styled.li`
    display : inline-block;
    text-transform : uppercase;
` 

export const NavLiHidden = styled.li`
    display : inline-block;
    text-transform : uppercase;
    visibility: hidden;
`
