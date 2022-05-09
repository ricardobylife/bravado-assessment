// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Robot } from 'utils/types'

type ResponseData = {
  robots: Robot[]
  message: string
  statusCode: number
}


export function getApiUrl(path: string) {
  return `${process.env.API_URL}${path}`
}


export async function fetchRobotsAPI(path: string, options = {}): Promise<Robot[]> {
  const requestUrl = getApiUrl(path)
  const defaultOption = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',

    },
  }
  const mergedOptions = {
    ...defaultOption,
    ...options,
  }

  const response  = await fetch(requestUrl, mergedOptions)
  if(!response.ok){
    throw new Error('Failed to fetch API')
  }
  const data = await response.json()
  return data
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
   const data = await fetchRobotsAPI(`/`)

   if(data.length === 0 || data === undefined){
     return res.status(404).json({ message: 'Not found', statusCode: 404, robots: [] })
   }
   return res.status(200).json({ message: 'Success', statusCode: 200, robots: data })
}
