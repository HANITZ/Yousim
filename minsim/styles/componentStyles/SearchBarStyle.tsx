import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'

getBreakPoints();

export const NavDiv = styled.div`
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`;

export const Label = styled.label`
  position: relative;
  
  input {
    position: relative;
    background-color: #fff;
    border-radius: 25px;
    
    width: 100%;
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

    :hover {
      border: 4px solid #FF5349;
    }

    :focus {
      border: 4px solid #FF5349;
      outline: none;
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