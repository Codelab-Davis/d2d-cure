import { PrismaClient } from './prisma/generated/client_enzymes';

declare global {
  var prismaEnzymes: any;
 }

// Check if we are running in a serverless environment
const isServerless = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL_ENV;

if (isServerless) {
  // In a serverless environment, create a new PrismaClient for each invocation
  prismaEnzymes = new PrismaClient();
} else {
  // In a non-serverless environment, use a global instance to avoid excessive connections
  if (!global.prismaEnzymes) {
    global.prismaEnzymes = new PrismaClient();
  }
  prismaEnzymes = global.prismaEnzymes;
}

export default prismaEnzymes;