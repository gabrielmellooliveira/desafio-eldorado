class Company {
  constructor (name) {
    this._name = name
  }

  getName() {
    return this._name
  }

  setName(name) {
    this._name = name
  }
}

module.exports = Company