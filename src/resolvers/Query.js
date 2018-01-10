function feed(parent, { search, first, skip }, ctx, info) {
  // build `where` object from `search` string
  const where = search
    ? { OR: [{ url_contains: search }, { description_contains: search }] }
    : {}

  return ctx.db.query.links({ first, skip, where }, info)
}

module.exports = {
  feed,
}
