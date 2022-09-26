import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const NavStyle = styled.nav`
    position : fixed;
    top: 0px;
    left: 0px;
    padding: 0 64px 0 64px;
    width : 100%;
`
export const ChangeNavStyle = styled.nav`
    background-color: white;
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
