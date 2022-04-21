class User {
  constructor (username, password) {
    this._username = username
    this._password = password
  }

  valid() {
    return (this._username && this._password)
  }
}

module.exports = User