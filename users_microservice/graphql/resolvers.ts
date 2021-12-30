import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userResolvers = {
  Query:{
    Users: async (parent, args, context) => {
      return await prisma.user.findMany({
        // include: {
        //   profile:true,
        // }
      });
    },
  },
};

export { userResolvers };