const newLink = {
  subscribe: (parent, args, ctx, info) => {
    return ctx.db.subscription.link(
      // see https://github.com/howtographql/graphql-js/issues/14
      // { where: { mutation_in: ['CREATED'] } },
      { },
      info,
    )
  },
}

const newVote = {
  subscribe: (parent, args, ctx, info) => {
    return ctx.db.subscription.vote(
      // see https://github.com/howtographql/graphql-js/issues/14
      // { where: { mutation_in: ['CREATED'] } },
      { },
      info,
    )
  },
}

module.exports = {
  newLink,
  newVote,
}
