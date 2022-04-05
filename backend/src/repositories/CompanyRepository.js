const CompanyModel = require('../database/models/CompanyModel')

class CompanyRepository {
  async add(company) {
    try {
      return await CompanyModel.create(company)
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectAll() {
    try {
      return await CompanyModel.findAll()
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await CompanyModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async update(company) {
    try {
      return await company.save()
    } catch (error) {
      console.log(error.message)
    }
  }

  async remove(id) {
    try {
      return await CompanyModel.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = CompanyRepository