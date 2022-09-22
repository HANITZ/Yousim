import styled from '@emotion/styled';

export const NavDiv = styled.div`
  position: fixed;
  top: 86px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const Label = styled.label`
  position: relative;
  
  input {
    position: relative;
    background-color: #fff;
    border-radius: 25px;
    min-height: 48px;
    min-width: 1080px;

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