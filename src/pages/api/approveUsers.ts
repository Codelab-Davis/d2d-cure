import prismaUsers from "../../../prismaUsersClient";

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { checkedUsers } = req.body;
    const userIds = Object.keys(checkedUsers);
    try {
      // Get an array of all user IDs from the checkedUsers object

      // Iterate over each user ID and update the corresponding user
      const updatedUsers = await Promise.all(userIds.map(async (userId: string) => {
        return await prismaUsers.users.update({
          where: {
            id: parseInt(userId),
          },
          data: {
            approved: true,
          },
        });
      }));

      console.log("Updated Users: ", updatedUsers);
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