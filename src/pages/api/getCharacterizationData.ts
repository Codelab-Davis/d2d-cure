import { PrismaClient } from '../../../prisma/generated/client_proteins'; 

const prisma = new PrismaClient();

export default async function handler(req:any, res:any) {
  try {
    const data = await prisma.characterizationData.findMany();
    res.status(200).json(data);
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error fetching characterization data' });
  }
}