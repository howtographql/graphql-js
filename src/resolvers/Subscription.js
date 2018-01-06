module.exports = {
  newLink: {
    subscribe(parent, args, ctx, info) {
      return ctx.db.subscription.link({}, info)
    },
  },
  newVote: {
    subscribe(parent, args, ctx, info) {
      return ctx.db.subscription.vote({}, info)
    },
  },
}
