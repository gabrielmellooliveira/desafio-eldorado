const Car = require('../models/Car')
const { createResponseContent, createResponseErrors } = require('../utils/responseBuilder')

class CarController {
  constructor(repository) {
    this.repository = repository
  }

  get = async (request, response) => {
    try {
      const cars = await this.repository.selectAll()
  
      return response.status(200).json(createResponseContent(cars))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  getOne = async (request, response) => {
    try {
      const { id } = request.params

      const car = await this.repository.selectByFilter({ id: parseInt(id) })
  
      return response.status(200).json(createResponseContent(car))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  post = async (request, response) => {
    try {
      const { model, companyId, year, color } = request.body

      const newCar = new Car(model, parseInt(companyId), parseInt(year), color)

      if (!newCar.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid car' ]))
      }

      const carAdded = await this.repository.add(newCar)
  
      return response.status(200).json(createResponseContent(carAdded))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  put = async (request, response) => {
    try {
      const { id } = request.params
      const { model, companyId, year, color } = request.body

      const carToEdit = new Car(model, parseInt(companyId), parseInt(year), color)

      if (!carToEdit.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid car' ]))
      }

      const carEdited = await this.repository.update({ id: parseInt(id), ...carToEdit })
  
      if (carEdited > 0) {
        return response.status(200).json(createResponseContent(carEdited))
      } else {
        return response.status(404).json(createResponseErrors([ 'Car not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  delete = async (request, response) => {
    try {
      const { id } = request.params

      const carRemoved = await this.repository.remove(parseInt(id))
  
      if (carRemoved > 0) {
        return response.status(200).json(createResponseContent({ id }))
      } else {
        return response.status(404).json(createResponseErrors([ 'Car not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }
}

module.exports = CarController