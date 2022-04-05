class Car {
  constructor (model, company, year, color) {
    this._model = model
    this._company = company
    this._year = year
    this._color = color
  }

  getModel() {
    return this._model
  }

  setModel(model) {
    this._model = model
  }

  getCompany() {
    return this._company
  }

  setCompany(company) {
    this._company = company
  }

  getYear() {
    return this._year
  }

  setYear(year) {
    this._year = year
  }

  getColor() {
    return this._color
  }

  setColor(color) {
    this._color = color
  }
}

module.exports = Car