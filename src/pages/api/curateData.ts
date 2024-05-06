import { PrismaClient } from '../../../prisma/generated/client_proteins';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const { ids } = req.body; // ids should be an array of integers

  if (!ids || !Array.isArray(ids)) {
    return res.status(400).json({ error: 'Invalid input: provide an array of IDs.' });
  }

  try {
    if (req.method === 'DELETE') {
      await prisma.characterizationData.deleteMany({
        where: {
          id: { in: ids }
        }
      });
      res.status(200).json({ message: 'Records deleted successfully' });
    } else if (req.method === 'PUT') {
      await prisma.characterizationData.updateMany({
        where: {
          id: { in: ids }
        },
        data: {
          approved_by_pi: true,
          curated: true
        }
      });
      res.status(200).json({ message: 'Records updated successfully' });
    } else {
      res.setHeader('Allow', ['DELETE', 'PUT']);
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error processing your request' });
  }
}
