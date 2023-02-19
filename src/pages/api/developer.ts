// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllDevelopers, getDevelopersByName, getDevsCount, getAllDevelopers_Skills, getDevelopers_SkillByName} from '@/lib/api/developer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, method } = req
  if (method === 'GET' && (query.search === "" || !query.search) && (query.id === "" || !query.id)){
    try {
      let result = await getAllDevelopers_Skills();
      res.status(200).json(result)
    } catch (e: any) {
      console.log(e);
      return res.status(500).json({
        error: e.toString()
      });
    }
  }
  else if (method === 'GET' && query.search) {
    try {
      let result = await getDevelopers_SkillByName(query.search);
      res.status(200).json(result);
    } catch (e: any) {
      console.log(e);
      return res.status(500).json({
        error: e.toString()
      });
    }
  }
  // else if (method === 'GET' && query.id) {
  //   try {
  //     let dev : DeveloperProps[];
  //     dev = developers.filter( dev => dev._id.toLowerCase().includes(query.id?.toLowerCase()));
  //     dev.skills.map()
  //     res.status(200).json(developers.filter( dev => dev._id.toLowerCase().includes(query.id?.toLowerCase())));
  //   } catch (e: any) {
  //     console.log(e);
  //     return res.status(500).json({
  //       error: e.toString()
  //     });
  //   }
  // }
}
