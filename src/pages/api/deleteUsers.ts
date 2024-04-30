import prismaUsers from "../../../prismaUsersClient";

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { checkedUsers } = req.body;
    const userIds = Object.keys(checkedUsers);
    try {

      const updatedUsers = await Promise.all(userIds.map(async (userId: string) => {
        return await prismaUsers.users.deleteMany({
          where: {
            id: parseInt(userId),
          }
        });
      }));

      console.log("Deleted Users: ", updatedUsers);
      res.status(200).json(updatedUsers);
    } catch (error) {
      console.error('Error updating users:', error);
      res.status(500).json({ error, message: "Failed to update users" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}