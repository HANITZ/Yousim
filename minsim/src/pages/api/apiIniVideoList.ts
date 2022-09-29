import { BASE_URL } from './fetch';



export default async function apiIniVideoList(chId?: string|string[]) {
  const response = await fetch(`${BASE_URL}api/v1/youtube/detail?channelId=${chId}&nextToken= `, {
    method: "GET",
  });
  
  const data = await response.json().catch(()=> {
    
  });

    return data
}