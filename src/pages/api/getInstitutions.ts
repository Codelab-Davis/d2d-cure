import { PrismaClient } from '../../../prisma/generated/client_users';

const prisma = new PrismaClient();

export default async function handler(req:any, res:any) {
  try {
    const institutions = await prisma.institutions.findMany({
      select: {
        id: true,
        fullname: true,
        abbr: true,
      },
    })
    res.status(200).json(institutions)
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error fetching institutions' })
  }
}