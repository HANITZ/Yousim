import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const IntroductionNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroductionSearchBarContainer = styled.div`
  position: relative;

  div {
    position: relative;
    background-color: #fff;
    border-radius: 25px;
    min-height: 48px;
    
    ${media(">desktop")} {
      min-width: 1080px;
    }
    ${media("<=desktop", ">tablet")} {
      min-width: 768px;
    }
    ${media("<=tablet", ">phone")} {
      min-width: 360px;
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
  }
`;