import { atom } from "recoil";


interface ISearchItem {
  id: string;
  banner: string;
  name: string;
  description: string;
  subscriber: number;
  video: number;
  thumbnail: string;
  time: string;
  view: number;
}


// 검색 리스트 search/[id]/index
export const aSerachList = atom<ISearchItem[]>({
	key: "aSearchList",
	default: []
})




// 채널 정보 channel/[channel_id]/index
export const aChData = atom<ISearchItem>({
	key: "aChData",
	default: {
		id: "",
		banner: "",
		name: "",
		description: "",
		subscriber: 0,
		video: 0,
		thumbnail: "",
		time: "",
		view: 0,
	}
})

export const all_atoms = {
	aChData: aChData
}

