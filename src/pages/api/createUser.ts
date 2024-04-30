import prismaUsers from "../../../prismaUsersClient";

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const {
      user_name,
      given_name,
      title,
      pi,
      institution,
      status,
      email,
      password } = req.body;
    try {
      const newUser = await prismaUsers.users.create({
        data: {
          user_name,
          given_name,
          title,
          pi,
          institution,
          status,
          email,
          password,
          image_filename: "",
          approved: false
        }
      });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ error, message: "Failed to create user"})
    }

  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}