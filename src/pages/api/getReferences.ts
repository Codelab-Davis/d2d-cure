import { PrismaClient } from '../../../prisma/generated/client_publications';

const prisma = new PrismaClient();

export default async function handler(req:any, res:any) {
    try {
      const refs = await prisma.papers.findMany();
      res.status(200).json(refs);
    } catch (error) {
      console.error('Request error', error);
      res.status(500).json({ error: 'Error fetching references data' });
    }
  }