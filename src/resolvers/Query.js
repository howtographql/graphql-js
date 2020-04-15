async function feed(parent, args, context) {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      }
    : {}

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma.link.count({ where })
  return {
    links,
    count,
  }
}

module.exports = {
  feed,
}
