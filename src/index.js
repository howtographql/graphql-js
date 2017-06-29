const express = require('express');

// This package automatically parses JSON requests.
const bodyParser = require('body-parser');

// This package will handle GraphQL server requests and responses
// for you, based on your schema.
const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');

const schema = require('./schema');
const connectMongo = require('./mongo-connector');
const {authenticate} = require('./authentication');
const buildDataloaders = require('./dataloaders');
const formatError = require('./formatError');

const start = async () => {
  const mongo = await connectMongo();
  var app = express();

  const buildOptions = async (req, res) => {
    const user = await authenticate(req, mongo.Users);
    return {
      // This context object is passed to all resolvers.
      context: {
        dataloaders: buildDataloaders(mongo),
        mongo,
        user
      },
      formatError,
      schema,
    };
  };
  app.use('/graphql', bodyParser.json(), graphqlExpress(buildOptions));

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',

    // Replace this e-mail with another to test with another user in your db.
    passHeader: `'Authorization': 'bearer token-foo@bar.com'`,
  }));

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Hackernews GraphQL server running on port ${PORT}.`)
  });
};

start();
