const { createResponseContent, createResponseErrors } = require('../utils/responseBuilder')
const authConfig = require('../config/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

class LoginController {
  constructor(repository) {
    this.repository = repository
  }

  post = async (request, response) => {
    const { username, password } = request.body

    try {
      const user = new User(username, password)

      if (!user.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid user' ]))
      }

      const encryptedPassword = await bcrypt.hash(password, 10)

      const validUser = await this.repository.selectByFilter({ 
        username, 
        password: encryptedPassword 
      })

      if (validUser) {
        const info = { username, data: Date.now().toString() }
        const token = jwt.sign(info, authConfig.secreteKey, authConfig.options)

        return response.status(200).json(createResponseContent({ token }))
      }

      return response.status(400).json(createResponseErrors(['Login or password incorrects']))
    } catch (error) {
      return response.status(400).json(createResponseErrors([error.message]))
    }
  }
}

module.exports = LoginController