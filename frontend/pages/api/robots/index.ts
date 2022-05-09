// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Robot } from 'utils/types'
import { list } from 'utils/data'

type ResponseData = {
  robots: Robot[]
}

function getAPIPath(path: string){
  return `${process.env.API_URL}${path}`
}


export async function fetchRobotsAPI(path: string) {
  return await fetch(path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      return data;
    }
    )
    .catch(err => {
      console.log(err);
    }
    );
}

export async function getRobots(){
  return await fetch(getAPIPath('/'), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      return data;
    }
    )
    .catch(err => {
      console.log(err);
      return []
    }
    );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
   await fetchRobotsAPI(getAPIPath(`?q=${req.query.q}`))
    .then(data => {
      res.status(200).json(
        data
      );
    }
    )
    .catch(err => {
      res.status(500).json({
        robots: []
      });
    });
}
