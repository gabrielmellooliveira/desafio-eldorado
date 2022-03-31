class Car {
  constructor (model, brand, year, motor) {
    this._model = model
    this._brand = brand
    this._year = year
    this._motor = motor
  }

  getModel() {
    return this._model
  }

  setModel(model) {
    this._model = model
  }

  getBrand() {
    return this._brand
  }

  setBrand(brand) {
    this._brand = brand
  }

  getYear() {
    return this._year
  }

  setYear(year) {
    this._year = year
  }

  getMotor() {
    return this._motor
  }

  setMotor(motor) {
    this._motor = motor
  }
}

module.exports = Car