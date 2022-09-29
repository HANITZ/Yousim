import { BASE_URL } from './fetch';



export default async function apitrendList(
) {

    const response = await fetch(`${BASE_URL}api/v1/Yousim/trend`, {
      method: "GET",
    });
    const data = await response.json().catch(()=> {
    });

    return data
}


