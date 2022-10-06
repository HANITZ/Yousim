import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

export const Tag = styled.div`
  width: 128px;
  height: 32px;
  background-color: #1C1C1F;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`