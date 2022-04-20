const authConfig = require('../config/auth')

class LoginController {
  constructor(repository) {
    this.repository = repository
  }

  post = async (request, response) => {
    const { login, password } = request.body

    const validPassword = bcrypt.compareSync(password, userDefault.senhaCriptografada)

    if (login === userDefault.login && validPassword) {
      const info = { login, data: Date.now().toString() }
      const token = jwt.sign(info, authConfig.secreteKey, authConfig.options)

      return response.status(200).json({ user: { login }, token })
    }

    return response.status(400).json({ message: 'Login or password incorrects' })
  }
}

module.exports = LoginController