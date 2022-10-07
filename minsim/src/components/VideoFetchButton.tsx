import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import apiChannelFetchStatus from 'src/pages/api/apiChannelFetchStatus';
import apiRequestMinsimReFetch from 'src/pages/api/apiRequestMinsimRefetch';
import apiRequestVideoMinsimReFetch from 'src/pages/api/apiRequestVideoMinsimRefetch copy';
import apiVideoFetchStatus from 'src/pages/api/apiVideoFetchStatus';
import { aChData, chMinsim } from 'states/atom';
import { ChannelTagWrapper } from 'styles/componentStyles/ChannelInfoStyle'
import { FetchButtonStyle, FetchLoadingButtonStyle } from 'styles/componentStyles/FetchButtonStyle'

const VideoFetchButton = () => {
  const [buttonStatus, setButtonStatus] = useState(true)
  const [chData, setChData] = useRecoilState(aChData);
  const {data, status} = useQuery(["videoData", chData.id], ()=>{return apiVideoFetchStatus(chData.id)})
  const [channelMinsim, setChannelMinsim] = useRecoilState(chMinsim)

  const reqRefetch = async () => {
    setButtonStatus(false)
    const resRefetch = await apiRequestVideoMinsimReFetch(chData.id)
    resRefetch.json().then((res) => {
      setChannelMinsim(res)
      console.log(channelMinsim);
    })
  }

  useEffect(() => {
    if (data?.status === 202) {
      setButtonStatus(false)
    } else if (data?.status === 200) {
      setButtonStatus(true)
    }
  }, [data])

  return (
    <ChannelTagWrapper>
      {buttonStatus ? <FetchButtonStyle onClick={reqRefetch}>민심 갱신</FetchButtonStyle> : <FetchLoadingButtonStyle>갱신 중</FetchLoadingButtonStyle>}
    </ChannelTagWrapper>
  )
}

export default VideoFetchButton