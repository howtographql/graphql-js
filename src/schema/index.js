const {makeExecutableSchema} = require('graphql-tools');

// Define your types here.
const typeDefs = `
  type Link {
    id: ID!
    url: String!
  }
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs});
