import { BASE_URL } from './fetch';

export default async function apiVideoFetchStatus(videoId?: string|string[]) {  
  const response = await fetch(`${BASE_URL}api/v1/Yousim/video-status?id=${videoId}`, {
    method: "GET",
  });
  return response
  
  const data = await response.json().catch(()=> {
    
  });

  return data
}