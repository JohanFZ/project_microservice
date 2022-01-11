import { authorResolvers } from './author/resolvers';
import { postResolvers } from './post/resolvers';
import { commentResolvers } from './comment/resolvers';

const resolvers = [ authorResolvers, postResolvers, commentResolvers ];

export { resolvers };
