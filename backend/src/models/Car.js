class Car {
  constructor (model, companyId, year, color) {
    this.model = model
    this.companyId = companyId
    this.year = year
    this.color = color
  }

  valid() {
    return (this.model && this.companyId && this.year && this.color)
  }
}

module.exports = Car