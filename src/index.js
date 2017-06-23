const express = require('express');

// This package automatically parses JSON requests.
const bodyParser = require('body-parser');

// This package will handle GraphQL server requests and responses
// for you, based on your schema.
const {graphqlExpress} = require('graphql-server-express');

const schema = require('./schema');

var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Hackernews GraphQL server running on port ${PORT}.`)
});
