const links = [
  {
    id: 1,
    url: 'http://graphql.org/',
    description: 'The Best Query Language'
  },
  {
    id: 2,
    url: 'http://dev.apollodata.com',
    description: 'Awesome GraphQL Client'
  },
];

module.exports = {
  Query: {
    allLinks: () => links,
  },
  Mutation: {
    createLink: (_, data) => {
      const newLink = Object.assign({id: links.length}, data);
      links.push(newLink);
      return newLink;
    }
  },
};
