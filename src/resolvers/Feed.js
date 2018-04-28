function links(parent, args, context, info) {
  const params = { where: { id_in: parent.linkIds }};
  if (parent.orderBy) {
      params['orderBy'] = parent.orderBy;
  }
  return context.db.query.links(params, info);
}

module.exports = {
  links,
}