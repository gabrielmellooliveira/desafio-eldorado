class Car {
  constructor (model, companyId, year, color) {
    this._model = model
    this._companyId = companyId
    this._year = year
    this._color = color
  }

  valid() {
    return (this._model && this._companyId && this._year && this._color)
  }
}

module.exports = Car