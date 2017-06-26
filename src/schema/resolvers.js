// Renames the "_id" property from MongoDB to be "id", as
// expected by the GraphQL schema definition.
const renameId = obj => obj.id = obj._id;

module.exports = {
  Query: {
    allLinks: async (root, data, {mongo: {Links}}) => {
      const links = await Links.find({}).toArray();
      links.forEach(renameId);
      return links;
    },
  },
  Mutation: {
    createLink: async (root, data, {mongo: {Links}}) => {
      const response = await Links.insert(data);
      return Object.assign({id: response.insertedIds[0]}, data);
    }
  },
};
