import styled from '@emotion/styled';

export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 75rem;
  }
`

export const Label = styled.label`
  position: relative;
    @media screen and (max-width: 768px) {
    width: 75rem;
  }
  
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