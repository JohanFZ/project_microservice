import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userResolvers = {
  User: {
    profile: async (parent, args, context) => {
      return await prisma.profile.findFirst({
        where: {
          userId: parent.id,
        }
      })
    }
  },
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