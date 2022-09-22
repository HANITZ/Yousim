import { BASE_URL } from './fetch';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name?: string
}

export default async function apisearchList(
  searchName?: string
) {
    console.log("123")
    const response = await fetch(`${BASE_URL}api/v1/youtube/search?title=${searchName}`, {
      method: "GET",
    });
    const data = await response.json().catch(()=> {
    });
    console.log(data)
    return data
}


