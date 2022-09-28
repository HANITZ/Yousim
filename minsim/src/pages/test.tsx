import React from 'react'
import { useRouter } from 'next/router';

/*
 * 1. 스웨거 기반으로 Mock Data 생성
 * 2. 이 페이지에서 버튼 라우터 푸쉬
 * 3. props로 채널 아이디랑 채널 이름 필요!!
 */


const TestPage = () => {
  const data = {
    "id": "40bRn--FL3Y",
    "title": "[아이유의 팔레트🎨] 팔레트 상담소에 크분이 왔습니다 (With 크러쉬) Ep.15",
    "description": "[IU's Palette] He is here in Palette through Rush Hour (With Crush) Ep.15\n[아이유의 팔레트] 팔레트 상담소에 크분이 왔습니다 (With 크러쉬) Ep.15\n\n#아이유 #팔레트 #크러쉬",
    "time": "2022-09-22T10:00:02Z",
    "duration": "PT46M43S",
    "nextToken": "CAUQAA",
    "view": 1167800,
    "like": 67822,
    "comment": 3992,
    "thumbnail": "https://i.ytimg.com/vi/40bRn--FL3Y/mqdefault.jpg",
    "channelTitle": null,
    "categoryId": 0,
    "tag": [
      "IU",
      "아이유",
      "이담",
      "EDAM",
      "이지금",
      "dlwlrma",
      "아이유tv",
      "아티비",
      "아이유티비",
      "아이유의팔레트",
      "팔레트",
      "집콕시그널",
      "집콕",
      "Palette",
      "이지은",
      "라일락",
      "어푸",
      "셀러브리티",
      "에필로그",
      "골든아워",
      "아이유콘서트",
      "콘서트",
      "Golden Hour",
      "크러쉬",
      "아이유 크러쉬",
      "Crush",
      "rush hour",
      "러시아워"
    ]
  }

  const router = useRouter()
  const onClick = () => {
    router.push({
      pathname: `/channel/1/${data.id}/`,
      query: {
        id: data.id,
        title: data.title,
        view: data.view,
        channelTitle: data.channelTitle,
        thumbnail: data.thumbnail,
        time: data.time
      }
    })
  }
  return (
    <>
      <button onClick={onClick}>ㄲ</button>
    </>
  )
}

export default TestPage;