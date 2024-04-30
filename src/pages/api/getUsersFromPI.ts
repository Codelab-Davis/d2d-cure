import prismaUsers from "../../../prismaUsersClient";

export default async function handler(req:any, res:any) {
  const { pi } = req.query;
  try {
    const users = await prismaUsers.users.findMany({
      where: {
        pi: pi,
        status: 'student',
        approved: true
      }
    });
    res.status(200).json(users);
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
}