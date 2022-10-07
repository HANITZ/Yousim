import { BASE_URL } from './fetch';


export default async function apiIniVideoDetail (videoId?: string) {
  const response = await fetch(`${BASE_URL}api/v1/Yousim/video?id=${videoId}`, {
    method: "GET",
  });
  if (response.status === 202) {
    return "갱신 중"
  }
  
  
  const data = await response.json().catch(()=> {
    
  });

  return data
}

