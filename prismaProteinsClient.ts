import { PrismaClient } from './prisma/generated/client_proteins';

const prismaProteins = new PrismaClient();

export default prismaProteins;