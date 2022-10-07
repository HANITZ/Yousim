import { BASE_URL } from './fetch';



export default async function apisearchList(
  searchName?: string
) {

    const response = await fetch(`${BASE_URL}api/v1/youtube/search?title=${searchName}`, {
      method: "GET",
    });
    const data = await response.json().catch(()=> {
    });

    return data
}


