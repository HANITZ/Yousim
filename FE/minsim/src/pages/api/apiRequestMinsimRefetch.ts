import { BASE_URL } from './fetch';

export default async function apiRequestMinsimReFetch(chId?: string|string[]) {  

  const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
  };

  const response = await fetch(`${BASE_URL}api/v1/Yousim/channel-refresh?id=${chId}`, options);
  return response
}