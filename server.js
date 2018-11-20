var graph = require('./graph.js');
var express = require('express');
var graphqlHTTP = require('express-graphql');

// Start the server
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: graph.schema,
    //rootValue: graph.data,
  graphiql: true
}));
app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');
