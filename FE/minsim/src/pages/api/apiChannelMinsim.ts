import { BASE_URL } from './fetch';


export default async function apiChannelMinsim(chId?: string|string[]) {  
  const response = await fetch(`${BASE_URL}api/v1/Yousim/channel?id=${chId}`, {
    method: "GET",
  });
  const data = await response.json().catch(()=> {
    
  });

  return data
}