'use strict';

const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require ('body-parser');
const schema = require('./data/schema');
const compression = require('compression');
const { ApolloEngine } = require('apollo-engine');
const cors = require('cors');
const app = express();

app.use(cors);
app.use(compression());
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema, 
  tracing: true 
})
);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/graphql', (req,res,next) => {
  res.json('working');
} );



const GRAPHQL_PORT = 4000;
const ENGINE_API_KEY = 'service:Dameon1:Qd4VMlHmpmhc43lhOpGdng';

const engine = new ApolloEngine({
  apiKey: ENGINE_API_KEY,
});

engine.listen({
  port: GRAPHQL_PORT,
  graphqlPaths: ['/graphql'],
  expressApp: app,
});
