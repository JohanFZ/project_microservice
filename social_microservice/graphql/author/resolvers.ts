import { prisma } from '../../config/prisma';

const authorResolvers = {
  Author: {
    comments: async (parent, args, context) => {
      return await prisma.comment.findMany({
        where: {
          authorId: parent.id,
        }
      })
    },
    posts: async (parent, args, context) => {
      return await prisma.post.findMany({
        where: {
          authorId: parent.id,
        }
      })
    },
  },
  Query: {
    authors: async (parent, args, context) => {
      return await prisma.author.findMany();
    },
  },
};

export { authorResolvers };