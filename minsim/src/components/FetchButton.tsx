import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useRecoilState } from 'recoil';
import apiChannelFetchStatus from 'src/pages/api/apiChannelFetchStatus';
import { aChData } from 'states/atom';
import { ChannelTagWrapper } from 'styles/componentStyles/ChannelInfoStyle'
import { FetchButtonStyle, FetchLoadingButtonStyle } from 'styles/componentStyles/FetchButtonStyle'

const FetchButton = () => {
  const [chData, setChData] = useRecoilState(aChData);
  const {data, status} = useQuery(["videoData", chData.id], ()=>{return apiChannelFetchStatus(chData.id)})

  return (
    <ChannelTagWrapper>
      {data?.status === 200 ? <FetchButtonStyle>민심 갱신</FetchButtonStyle> : <FetchLoadingButtonStyle>갱신 중</FetchLoadingButtonStyle>}
    </ChannelTagWrapper>
  )
}

export default FetchButton