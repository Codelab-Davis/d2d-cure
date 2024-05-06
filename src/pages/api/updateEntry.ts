import prisma from "../../../prismaUsersClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PUT') {
      res.setHeader('Allow', ['PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }
  
    const { id } = req.query;
    const { newData } = req.body;
  
    try {
      const updatedEntry = await prisma.entry.update({
        where: { id: Number(id) },
        data: newData,
      });
  
      res.status(200).json(updatedEntry);
    } catch (error) {
      console.error('Error updating entry:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }