const links = [
  {id: 1, url: 'http://graphql.org/'},
  {id: 2, url: 'http://dev.apollodata.com'},
];

module.exports = {
  Query: {
    allLinks: () => links,
  },
};
