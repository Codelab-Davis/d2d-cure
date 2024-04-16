// This is for the 'submit data' part, to see if the variant the user is submitting data for exists already for their school 

import { PrismaClient } from '../../../prisma/generated/client_proteins'; 

const prisma = new PrismaClient();

export default async function handler(req:any, res:any) {
  const { resid, resnum, resmut, institution } = req.query;

  const resnumInt = parseInt(resnum, 10);


  try {
    // Add filtering logic here based on the query parameters
    const data = await prisma.characterizationData.findMany({ 
      where: {
        resid: resid,
        resnum: resnumInt,
        resmut: resmut, 
        institution: institution,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error fetching characterization data' });
  }
}