import styled from '@emotion/styled';
import theme from '../../styles/theme';

const DescribeTextStyle = styled.div`
  display: flex;
`

const DescribeMainText = styled.h2`
  color: #FF5349;
`
const DescribeSubText = styled.h2`
  color: #fff;
`

const DescribeText = (mainText: string, subText: string) => {
  return (
    <DescribeTextStyle>
      <DescribeMainText>{mainText}</DescribeMainText>
      <DescribeSubText>{subText}</DescribeSubText>
    </DescribeTextStyle>
  )
}

export default DescribeText;