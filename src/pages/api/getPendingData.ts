import { PrismaClient } from '../../../prisma/generated/client_proteins';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  try {
    const characterizationData = await prisma.characterizationData.findMany({
      where: {
        submitted_for_curation: true,
        curated: false
      }
    });

    // Fetch KineticRawData for each raw_data_id directly
    const combinedData = await Promise.all(characterizationData.map(async (data) => {
      const kineticRawData = await prisma.kineticRawData.findUnique({
        where: { id: data.raw_data_id },
        select: {
          purification_date: true,
          assay_date: true,
          approved_by_student: true
        }
      });

      const tempRawData = await prisma.tempRawData.findUnique({
        where: { id: data.temp_raw_data_id },
        select: {
          user_name: true,
          plate_num: true,
          purification_date: true,
          assay_date: true,
          approved_by_student: true
        }
      })

      return {
        ...data,
        kineticRawData: kineticRawData,
        tempRawData: tempRawData
      };
    }));

    res.status(200).json(combinedData);
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error fetching characterization data' });
  }
}