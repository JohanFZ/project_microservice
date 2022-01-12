import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { readFileSync } from 'fs';

const supergraphSdl = readFileSync('./supergraph.graphql').toString();

const gateway = new ApolloGateway({ supergraphSdl });

const server = new ApolloServer({
  gateway,
});

server
  .listen({ port: 4003 })
  .then(() => {
    console.log('Gateway server running');
  })
  .catch((err) => {
    console.error(err);
  });