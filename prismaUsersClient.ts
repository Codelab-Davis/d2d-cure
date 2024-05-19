import { PrismaClient } from './prisma/generated/client_users';

const prismaUsers = new PrismaClient();

export default prismaUsers;