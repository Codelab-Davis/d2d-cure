import { NextApiRequest, NextApiResponse } from 'next';
import firebaseAdmin from '../../../firebaseAdmin';
import { auth } from 'firebase-admin';
import { getAuth, deleteUser } from "firebase/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
    const { usersToDelete } = req.body;
    console.log("Users to Delete", usersToDelete);
    const { validEmails } = req.body;
    console.log("Valid Email", validEmails);

    const userRecords = await firebaseAdmin.auth().getUsers(validEmails.map((email: string) => ({ email })));

    console.log('Successfully fetched user data:', userRecords);

    const userIds = userRecords.users.map(userRecord => userRecord.uid);
    
    console.log('User IDs:', userIds);


    if (userIds.length === 1) {
        // If only one user is to be deleted, use deleteUser function
        const singleUser = String(userIds[0]);
        await firebaseAdmin.auth().deleteUser(singleUser);
        console.log("Single user deleted");
      } else {
        // If multiple users are to be deleted, use deleteUsers function
        await firebaseAdmin.auth().deleteUsers(userIds);
        console.log("Multiple users deleted");
      }


    res.status(200).json({ message: 'Users deleted successfully' });
    } catch (error) {
      console.error('Error deleting users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' }); 
  }
}