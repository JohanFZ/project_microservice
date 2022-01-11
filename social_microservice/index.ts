import { ApolloServer } from 'apollo-server';
import { userResolvers } from './graphql/resolvers';
import { userTypes } from './graphql/types';
import dotenv from 'dotenv';

const server = new ApolloServer({
  typeDefs: userTypes,
  resolvers: userResolvers
});

server.listen({ port: process.env.PORT || 4002 }).then((url) => {
  console.log("Microservicio de usuarios corriendo");
});