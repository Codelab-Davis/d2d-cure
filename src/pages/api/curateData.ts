import prismaProteins from "../../../prismaProteinsClient";

export default async function handler(req: any, res: any) {
  const { ids } = req.body; // ids should be an array of integers

  if (!ids || !Array.isArray(ids)) {
    console.log(ids)
    console.log("Failed, ids aren't valid");
    return res.status(400).json({ error: 'Invalid input: provide an array of IDs.' });
  }

  try {
    const integerIds = ids.map(id => parseInt(id, 10))
    if (req.method === 'DELETE') {
      await prismaProteins.characterizationData.deleteMany({
        where: {
          id: { in: integerIds }
        }
      });
      res.status(200).json({ message: 'Records deleted successfully' });
    } else if (req.method === 'PUT') {
      await prismaProteins.characterizationData.updateMany({
        where: {
          id: { in: integerIds }
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
