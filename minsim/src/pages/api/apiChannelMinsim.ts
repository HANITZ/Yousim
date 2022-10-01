import { BASE_URL } from './fetch';


export default async function apiChannelMinsim(chId?: string|string[]) {  
  const response = await fetch(`${BASE_URL}api/v1/Yousim/channel?id=${chId}`, {
    method: "GET",
  });
  if (response.status === 202) {
    return "갱신 중"
  }
  
  return response
}