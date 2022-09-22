import styled from '@emotion/styled';

export const IntroductionNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroductionSearchBarContainer = styled.div`
  position: relative;
    @media screen and (max-width: 768px) {
      width: 75rem;
      margin-top: 200px;
      margin-left: auto;
      padding: 0 auto;
  }
  div {
    position: relative;
    background-color: #fff;
    border-radius: 25px;
    min-height: 48px;
    min-width: 1080px;
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