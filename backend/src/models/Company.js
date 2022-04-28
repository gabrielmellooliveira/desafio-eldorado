class Company {
  constructor (name) {
    this.name = name
  }

  valid() {
    return !!(this.name)
  }
}

module.exports = Company