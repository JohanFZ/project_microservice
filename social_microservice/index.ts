import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/types';
import dotenv from 'dotenv';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

server.listen({ port: process.env.PORT || 4002 }).then((url) => {
  console.log("Microservicio social corriendo");
});