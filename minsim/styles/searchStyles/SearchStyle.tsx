import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();


export const SloganContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 210px;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`

export const SearchListUl = styled.ul`
  list-style-type: disc;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0;
`;

export const SearchListContainerInnerWrapper = styled.li`
  width: 100%; 
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 45px 0 45px 0;

  ${media("<=tablet", ">phone")} {
    flex-direction: column;
  }

  :hover{
    cursor: pointer;
  }
`

export const SearchMarginDiv = styled.div`
  margin-top: 256px;
`
export const SearchInfoImgTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  p, h3 {
    display:inline-block;
  }
`

export const SearchImgDiv = styled.div`
  position: relative;

  width: 188px;
  height: 188px;
  

  ${media("<=desktop", ">tablet")} {
    width: 128px;
    height: 128px;
  }
  ${media("<=tablet", ">phone")} {
    margin-right: 16px;
    width: 64px;
    height: 64px;
  }

`