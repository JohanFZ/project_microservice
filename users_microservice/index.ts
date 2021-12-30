import { ApolloServer } from 'apollo-server';
import { userResolvers } from './graphql/resolvers';
import { userTypes } from './graphql/types';

const server = new ApolloServer({
  typeDefs: userTypes,
  resolvers: userResolvers
});

server.listen({port: 4000}).then((url) => {
  console.log("Microservicio de usuarios corriendo");
});