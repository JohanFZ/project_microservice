import { ApolloServer } from 'apollo-server';
import { authorResolvers, commentResolvers, postResolvers } from './graphql/resolvers';
import { authorTypes, commentTypes, postTypes } from './graphql/types';
import { buildSubgraphSchema } from '@apollo/subgraph';
import dotenv from 'dotenv';

const server = new ApolloServer({
  schema: buildSubgraphSchema([
    { typeDefs: authorTypes, resolvers: authorResolvers },
    { typeDefs: postTypes, resolvers: postResolvers },
    { typeDefs: commentTypes, resolvers: commentResolvers }
  ]),
});

server.listen({ port: process.env.PORT || 4002 }).then((url) => {
  console.log("Microservicio social corriendo");
});