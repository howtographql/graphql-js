// async function feed(parent, args, context) {
//   const where = args.filter
//     ? {
//         OR: [
//           { url_contains: args.filter },
//           { description_contains: args.filter },
//         ],
//       }
//     : {}

//   const queriedLinkes = await context.prisma.links(
//     { where, skip: args.skip, first: args.first, orderBy: args.orderBy },
//     `{ id }`,
//   )

//   const countSelectionSet = `
//     {
//       aggregate {
//         count
//       }
//     }
//   `
//   const linksConnection = await context.prisma.linksConnection({}, countSelectionSet)

//   return {
//     count: linksConnection.aggregate.count,
//     linkIds: queriedLinkes.map(link => link.id),
//   }
// }

async function feed(parent, args, context) {
  const count = await context.prisma
    .linksConnection({
      where: {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      },
    })
    .aggregate()
    .count()
  const links = await context.prisma.links({
    where: {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  return {
    count,
    links,
  }
}

module.exports = {
  feed,
}
