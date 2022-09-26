import styled from '@emotion/styled';
import theme from '../theme';

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

export const SearchInfoImgTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  p, h3 {
    display:inline-block;
  }
`