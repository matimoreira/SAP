// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllSkills, getSkillsByName, getSkillsByIdDev} from '@/lib/api/skill';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, method } = req
  
  if (method === 'GET' && (query.search === "" || !query.search) && (query.id === "" || !query.id)) {
    try {
      let result = await getAllSkills();
      res.status(200).json(result);
    } catch (e: any) {
      console.log(e);
      return res.status(500).json({
        error: e.toString()
      });
    }
  }
  else if (method === 'GET' && query.search) {
    try {
      let result = await getSkillsByName(query.search)
      res.status(200).json(result)
    } catch (e: any) {
      console.log(e);
      return res.status(500).json({
        error: e.toString()
      });
    }
  }
  else if (method === 'GET' && query.id) {
    try {
      console.log("caca");
      let result = await getSkillsByIdDev(query.id);
      res.status(200).json(result);
    } catch (e: any) {
      console.log(e);
      return res.status(500).json({
        error: e.toString()
      });
    }
  }
}
