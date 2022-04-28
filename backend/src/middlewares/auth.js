const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

function auth(request, response, next) {
  const { authorization } = request.headers

  if (authorization === null || authorization === undefined) {
    return response.status(404).json({ message: 'Token not found' })
  }

  const token = authorization.split(' ')[1]

  try {
    jwt.verify(token, authConfig.secreteKey, authConfig.options)

    next()
  } catch (error) {
    return response.status(401).json({ message: 'No autorize' })
  }
}

module.exports = auth