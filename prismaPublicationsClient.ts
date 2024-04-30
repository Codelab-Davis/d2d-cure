// might be broken 

import { PrismaClient } from './prisma/generated/client_publications'

declare global {
    var prismaPublications: any;
  }

if (process.env.NODE_ENV === 'production') {
  prismaPublications = new PrismaClient();
} else {
  if (!global.prismaPublications) {
    global.prismaPublications = new PrismaClient();
  }
  prismaPublications = global.prismaPublications;
}

export default prismaPublications;