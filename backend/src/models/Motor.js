class Motor {
  constructor (performance) {
    this._performance = performance
  }

  getPerformance() {
    return this._performance
  }

  setPerformance(performance) {
    this._performance = performance
  }
}

module.exports = Motor