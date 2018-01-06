const { GraphQLServer } = require('graphql-yoga')
const { Graphcool } = require('graphcool-binding')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')
const AuthPayload = require('./resolvers/AuthPayload')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  AuthPayload,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Graphcool({
      typeDefs: './src/generated/database.graphql',
      endpoint: 'http://localhost:60000/graphql-js/dev',
      secret: 'my-secret',
    }),
  }),
})

server.start({}, () =>
  console.log('Server is running on http://localhost:4000'),
)
