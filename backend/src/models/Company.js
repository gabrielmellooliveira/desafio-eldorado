class Company {
  constructor (name) {
    this._name = name
  }

  valid() {
    return !!(this._name)
  }
}

module.exports = Company