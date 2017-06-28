const {ObjectID} = require('mongodb')

module.exports = {
  Query: {
    allLinks: async (root, data, {mongo: {Links, Users}}) => {
      const links = await Links.find({}).toArray();
      for (let i = 0; i < links.length; i++) {
        links[i].postedBy = await Users.findOne(
          {_id: new ObjectID(links[i].postedById)},
        );
      }
      return links;
    },
  },

  Mutation: {
    createLink: async (root, data, {mongo: {Links}, user}) => {
      const response = await Links.insert(
        Object.assign({postedById: user && user.id}, data),
      );
      return Object.assign(
        {id: response.insertedIds[0], postedBy: user},
        data,
      );
    },

    createUser: async (root, data, {mongo: {Users}}) => {
      // You need to convert the given arguments into the format for the
      // `User` type, grabbing email and password from the "authProivder".
      const newUser = {
        name: data.name,
        email: data.authProvider.email.email,
        password: data.authProvider.email.password,
      };
      const response = await Users.insert(newUser);
      return Object.assign({id: response.insertedIds[0]}, newUser);
    },

    signinUser: async (root, data, {mongo: {Users}}) => {
      const user = await Users.findOne({email: data.email.email});
      if (data.email.password === user.password) {
        return {token: `token-${user.email}`, user};
      }
    },
  },

  Link: {
    // Convert the "_id" field from MongoDB to "id" from the schema.
    id: root => root._id || root.id,
  },

  User: {
    // Convert the "_id" field from MongoDB to "id" from the schema.
    id: root => root._id || root.id,
  },
};
