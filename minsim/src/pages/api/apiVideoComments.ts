import { BASE_URL } from './fetch';


export default async function apiIniVideoComments (videoId?: string) {
  const response = await fetch(`${BASE_URL}api/v1/youtube/comment?videoId=${videoId}`, {
    method: "GET",
  });
  
  const data = await response.json().catch(()=> {
    
  });
  
  return data
}

