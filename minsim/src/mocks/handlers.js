import { rest } from 'msw'
export const HOME_URL = process.env.NEXT_PUBLIC_API_URL;

export const handlers = [
  rest.get(HOME_URL+`/api/v1/youtube/search`, (req, res, ctx) => {
    return res(
      ctx.json([
        { 'id': 1, 'name': '침착맨', 'video': 123, }
      ])
    )
  })
] 