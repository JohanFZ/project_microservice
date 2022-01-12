import { ApolloServer } from 'apollo-server';
import { userResolvers } from './graphql/resolvers';
import { userTypes } from './graphql/types';
import { buildSubgraphSchema } from '@apollo/subgraph';

const server = new ApolloServer({
  schema: buildSubgraphSchema([{typeDefs: userTypes, resolvers: userResolvers}]),
});

server.listen({port: 4000}).then((url) => {
  console.log("Microservicio de usuarios corriendo");
});