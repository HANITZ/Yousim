import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

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

interface IVideo {
  title: string;
  name: string;
  view: number;
  time: string;
	id: string;
}

interface Ikeywords {
	text: string;
	value: number
}
interface IMinsim {
	id: string;
	keywords: Ikeywords[];
	ms: number;
}

// 검색 리스트 search/[id]/index
export const aSerachList = atom<ISearchItem[]>({
	key: "aSearchList",
	default: [],
	effects_UNSTABLE: [persistAtom],
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
	},
	effects_UNSTABLE: [persistAtom],
})

// 채널 정보 channel/[channel_id]/index
export const aVideo = atom<IVideo>({
	key: "aVideo",
	default: {
		title: '',
		name: '',
		time: '',
		view: 0,
		videoId: ''
	},
	effects_UNSTABLE: [persistAtom],
})

export const all_atoms = {
	aChData: aChData
}

export const chMinsim = atom<IMinsim>({
	key: "",
	default: {
		id: '',
		keywords: [],
		ms: 0,
	}
})
