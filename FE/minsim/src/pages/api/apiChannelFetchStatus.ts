import { BASE_URL } from './fetch';

export default async function apiChannelFetchStatus(chId?: string|string[]) {  
  const response = await fetch(`${BASE_URL}api/v1/Yousim/channel-status?id=${chId}`, {
    method: "GET",
  });
  return response
  
  const data = await response.json().catch(()=> {
    
  });

  return data
}