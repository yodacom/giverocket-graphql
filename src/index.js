import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { createServer } from 'http';

import './config/db';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express();

app.use(express.json());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/api/graphql',
  }),
);

app.use(
  '/api/graphql',
  graphqlExpress(req => ({
    ...req,
    schema,
  })),
);

const graphqlServer = createServer(app);

graphqlServer.listen(8000, err => {
  if (err) throw err;

  console.log('App listen on port 8000');
});
