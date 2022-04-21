const Company = require('../models/Company')
const { createResponseContent, createResponseErrors } = require('../utils/responseBuilder')

class CompanyController {
  constructor(repository) {
    this.repository = repository
  }

  get = async (request, response) => {
    try {
      const companies = await this.repository.selectAll()
  
      return response.status(200).json(createResponseContent(companies))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  getOne = async (request, response) => {
    try {
      const { id } = request.params

      const company = await this.repository.selectByFilter({ id: parseInt(id) })
  
      return response.status(200).json(createResponseContent(company))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  post = async (request, response) => {
    try {
      const { name } = request.body

      const newCompany = new Company(name)

      if (!newCompany.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid company' ]))
      }

      const companyAdded = await this.repository.add(newCompany)
  
      return response.status(200).json(createResponseContent(companyAdded))
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  put = async (request, response) => {
    try {
      const { id } = request.params
      const { name } = request.body

      const companyToEdit = new Company(name)

      if (!companyToEdit.valid()) {
        return response.status(400).json(createResponseErrors([ 'Invalid company' ]))
      }

      const companyEdited = await this.repository.update({ id: parseInt(id), ...companyToEdit })
  
      if (companyEdited > 0) {
        return response.status(200).json(createResponseContent(companyEdited))
      } else {
        return response.status(404).json(createResponseErrors([ 'Company not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }

  delete = async (request, response) => {
    try {
      const { id } = request.params

      const companyRemoved = await this.repository.remove(parseInt(id))
  
      if (companyRemoved > 0) {
        return response.status(200).json(createResponseContent({ id }))
      } else {
        return response.status(404).json(createResponseErrors([ 'Company not found' ]))
      }
    } catch (error) {
      return response.status(400).json(createResponseErrors([ error.message ]))
    }
  }
}

module.exports = CompanyController