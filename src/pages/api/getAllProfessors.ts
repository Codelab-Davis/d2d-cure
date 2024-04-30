import prismaUsers from "../../../prismaUsersClient";

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    try {
      const users = await prismaUsers.users.findMany({
        where: {
          OR: [
            {
              status: "ADMIN"
            },
            {
              status: "professor"
            },
          ],
        },
      });
      res.status(200).json(users);
    } catch (error) {
      console.error('Request error', error);
      res.status(500).json({ error: 'Error fetching users' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}