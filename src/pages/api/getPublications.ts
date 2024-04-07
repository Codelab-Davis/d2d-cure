import { PrismaClient } from '../../../prisma/generated/client_publications';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
        try {
            const papers = await prisma.papers.findMany(); // Assuming 'papers' is the correct model name
            res.status(200).json(papers);
        } catch (error) {
            console.error('Request error', error);
            res.status(500).json({ error: 'Error fetching publications' });
        }
    } else {
        // Handles any requests that aren't GET
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}