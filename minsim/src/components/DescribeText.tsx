import styled from '@emotion/styled';

const DescribeTextStyle = styled.div`
  margin: 128px 0px 64px 64px;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 768px) {
    width: 100rem;
    padding: auto;
    margin: auto;
  }
`

const DescribeMainText = styled.h2`
  color: #FF5349;
  margin-bottom: 32px;
  @media screen and (max-width: 768px) {
    width: 100rem;
    margin: 0 auto;
  }
  
`
const DescribeSubText = styled.h2`
  color: #fff; 
  @media screen and (max-width: 768px) {
    width: 100rem;
    margin: 0 auto;
  }
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