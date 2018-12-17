function links(parent, args, context) {
  return context.prisma.links({ where: { id_in: parent.linkIds } })
}

module.exports = {
  links,
}