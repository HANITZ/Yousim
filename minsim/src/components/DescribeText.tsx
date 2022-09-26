import styled from '@emotion/styled';
import media, { getBreakPoints } from 'css-in-js-media'
getBreakPoints();

const DescribeTextStyle = styled.div`
  margin: 128px 0px 64px 0;
  display: flex;
  flex-direction: column;

  ${media(">desktop")} {
    margin-left: 64px;
    margin-right: 64px;
  }
  ${media("<=desktop", ">tablet")} {
    min-width: 32px;
  }
  ${media("<=tablet", ">phone")} {
    margin-left: 16px;
    margin-right: 16px;
  }
`

const DescribeMainText = styled.h2`
  display: inline-block;
  color: #FF5349;
  margin-bottom: 32px;
`
const DescribeSubText = styled.h2`
  display: inline-block;
  color: #fff; 
`

interface IDescribeText{
  mainText: string,
  subText1: string
  subText2: string
}

const DescribeText = ({mainText, subText1, subText2}: IDescribeText) => {
  return (
    <DescribeTextStyle>
      <DescribeMainText>{mainText}</DescribeMainText>
      <DescribeSubText>{subText1}</DescribeSubText>
      <DescribeSubText>{subText2}</DescribeSubText>
    </DescribeTextStyle>
  )
}

export default DescribeText;