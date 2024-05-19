import { PrismaClient } from './prisma/generated/client_proteins';

declare global {
  var prismaProteins: any;
 }

// Check if we are running in a serverless environment
const isServerless = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL_ENV;

if (isServerless) {
  // In a serverless environment, create a new PrismaClient for each invocation
  prismaProteins = new PrismaClient();
} else {
  // In a non-serverless environment, use a global instance to avoid excessive connections
  if (!global.prismaProteins) {
    global.prismaProteins = new PrismaClient();
  }
  prismaProteins = global.prismaProteins;
}

export default prismaProteins;


// import { PrismaClient } from './prisma/generated/client_proteins'

// declare global {
//     var prismaProteins: any;
//   }

// if (process.env.NODE_ENV === 'production') {
//   prismaProteins = new PrismaClient();
// } else {
//   if (!global.prismaProteins) {
//     global.prismaProteins = new PrismaClient();
//   }
//   prismaProteins = global.prismaProteins;
// }

// export default prismaProteins;






