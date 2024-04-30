import prismaProteins from "../../../prismaProteinsClient";

export default async function handler(req:any, res:any) {
  const { id } = req.query; 

  try {
    const data = await prismaProteins.characterizationData.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: 'Characterization data not found' });
    }
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error fetching characterization data entry' });
  }
}