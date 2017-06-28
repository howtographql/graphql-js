const {MongoClient} = require('mongodb');

/**
 * 1. Specify the url for connecting to the desired MongoDB instance.
 * This is the default url usually available, but feel free to replace
 * it with your own if different.
 */
const MONGO_URL = 'mongodb://localhost:27017/hackernews';

/**
 * 2. Export a function that connects to the db and returns the collections
 * your resolvers will use.
 */
module.exports = async () => {
  // Connecting to MongoDB is an async operation, so we need to wait here.
  const db = await MongoClient.connect(MONGO_URL);
  return {
    Links: db.collection('links'),
    Users: db.collection('users'),
    Votes: db.collection('votes'),
  };
}
