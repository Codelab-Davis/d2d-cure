import { NextApiRequest, NextApiResponse } from 'next';
const formidable = require('formidable');
import path from 'path';


export const config = {
  api: {
    bodyParser: false, // Disable Next.js' default body parser
  },
};

export default async function uploadFile(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), 'public/sequencing');
  form.keepExtensions = true; // Include the extension in the saved file
  form.parse(req, async (err:any, fields:any, files:any) => {
    if (err) {
      res.status(500).json({ error: 'File upload error' });
      return;
    }
    // Here, you can handle the uploaded file, e.g., saving file info to your database
    console.log(files.file); // 'file' is the key we used in formData.append

    // Respond with success
    res.status(200).json({ message: 'File uploaded successfully' });
  });
}