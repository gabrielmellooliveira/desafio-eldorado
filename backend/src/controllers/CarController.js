const CarRepository = require('../repositories/CarRepository')

class CarController {
  constructor() {
    this.repository = new CarRepository()
  }

  async get(request, response) {
    try {
      const carros = await this.repository.selectAll()
  
      return response.status(200).json({ carros })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  async getOne(request, response) {
    try {
      const { id } = request.params

      const cars = await this.repository.selectByFilter({ id: parseInt(id) })
  
      return response.status(200).json({ cars })
    } catch (error) {
      return response.status(400).json({ error: error.message })
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
  
      return response.status(200).json({ car: carAdded })
    } catch (error) {
      return response.status(400).json({ error: error.message })
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

      const carsEdited = await this.repository.update(carToEdit)
  
      if (carsEdited > 0) {
        return response.status(200).json({ message: `Car ${id} edited`, car: carsEdited })
      } else {
        return response.status(404).json({ message: 'Car not found' })
      }
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params

      const carsRemoved = await this.repository.remove(parseInt(id))
  
      if (carsRemoved > 0) {
        return response.status(200).json({ message: `Car ${id} deleted` })
      } else {
        return response.status(404).json({ message: 'Car not found' })
      }
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

module.exports = new CarController()