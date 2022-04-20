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

  async getOne(request, response) {
    try {
      const { id } = request.params

      const car = await this.repository.selectByFilter({ id: parseInt(id) })
  
      return response.status(200).json(createResponseContent(car))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  async post(request, response) {
    try {
      const { model, companyId, year, color } = request.body

      const newCar = {
        model,
        companyId: parseInt(companyId), 
        year: parseInt(year), 
        color
      }

      const carAdded = await this.repository.add(newCar)
  
      return response.status(200).json(createResponseContent(carAdded))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params
      const { model, companyId, year, color } = request.body

      const carToEdit = {
        id: parseInt(id),
        model,
        companyId: parseInt(companyId), 
        year: parseInt(year), 
        color
      }

      const carEdited = await this.repository.update(carToEdit)
  
      if (carEdited > 0) {
        return response.status(200).json(createResponseContent(carEdited))
      } else {
        return response.status(404).json(createResponseErrors([ 'Car not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  async delete(request, response) {
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