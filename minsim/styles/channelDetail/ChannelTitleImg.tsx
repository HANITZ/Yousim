import TitleImg from '/public/images/titleImg.jpg'
import styled from '@emotion/styled';
import ImageTag from 'next/image'

interface Props {
    width?: string
    height?: string
    src?: any
    alt?: string
    radius?: string
    margin?: string
    
}

const TitleImage = ({
    width = '128px',
    height = '128px',
    src = {TitleImg},
    alt = '채널 대표 이미지',
    radius = '50%',
    margin = '10px',
    
    
}: Props) => {
    return (
        <ImgWrapper margin={margin} radius={radius}>
            <ImageTag width={width} height={height} src={src} alt={alt}/>
        </ImgWrapper>
    )
}

interface wrapperProps {
    margin?: string
    radius?: string
}

const ImgWrapper = styled.div<wrapperProps>`
    margin: ${(props) => props.margin};

    img {
        border-radius: ${(props) => props.radius};
    }
`

export default TitleImage