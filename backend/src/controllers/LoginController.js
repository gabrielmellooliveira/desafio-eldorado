const authConfig = require('../config/auth')
const bcrypt = require('bcrypt')

class LoginController {
  constructor(repository) {
    this.repository = repository
  }

  post = async (request, response) => {
    const { username, password } = request.body

    const encryptedPassword = await bcrypt.hash(password)

    const user = await this.repository.selectByFilter({ 
      username, 
      password: encryptedPassword 
    })

    if (user) {
      const info = { username, data: Date.now().toString() }
      const token = jwt.sign(info, authConfig.secreteKey, authConfig.options)

      return response.status(200).json({ token })
    }

    return response.status(400).json({ message: 'Login or password incorrects' })
  }
}

module.exports = LoginController