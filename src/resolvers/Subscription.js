module.exports = {
  newLink: {
    subscribe(parent, args, ctx, info) {
      return ctx.db.subscription.link(
        { where: { mutation_in: ['CREATED'] } },
        info,
      )
    },
  },
  newVote: {
    subscribe(parent, args, ctx, info) {
      return ctx.db.subscription.vote({}, info)
    },
  },
}
