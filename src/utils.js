const jwt = require('jsonwebtoken')

module.exports.getUserId = context => {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, 'replace-this-jwt-secret')
    return userId
  }

  throw new Error('Not authenticated')
}
