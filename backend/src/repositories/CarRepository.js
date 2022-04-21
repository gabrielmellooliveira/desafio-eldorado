const CarModel = require('../database/models/CarModel')
const CompanyModel = require('../database/models/CompanyModel')

class CarRepository {
  async add(car) {
    try {
      return await CarModel.create(car)
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectAll() {
    try {
      return await CarModel.findAll({ include: [ { model: CompanyModel } ] })
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await CarModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async update(car) {
    try {
      return await CarModel.update(car, {
        where: {
          id: car.id
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async remove(id) {
    try {
      return await CarModel.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = CarRepository