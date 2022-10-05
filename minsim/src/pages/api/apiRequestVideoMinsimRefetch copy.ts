import { BASE_URL } from './fetch';

export default async function apiRequestVideoMinsimReFetch(videoId?: string|string[]) {  

  const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
  };

  const response = await fetch(`${BASE_URL}api/v1/Yousim/video-refresh?id=${videoId}`, options);
  return response
}