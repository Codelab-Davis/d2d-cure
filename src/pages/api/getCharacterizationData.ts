import prismaProteins from "../../../prismaProteinsClient";

export default async function handler(req:any, res:any) {
  try {
    const data = await prismaProteins.characterizationData.findMany();
    res.status(200).json(data);
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error fetching characterization data' });
  }
}