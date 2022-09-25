import styled from '@emotion/styled';

export const NavStyle = styled.nav`
    position : fixed;
    top: 0px;
    left: 0px;
    padding: 0 64px 0 64px;
    width : 100%;
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
