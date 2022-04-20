const Repository = require('./Repository')

const CarRepository = require('./CarRepository')
const CompanyRepository = require('./CompanyRepository')

module.exports = {
  CarRepository: new Repository(new CarRepository()),
  CompanyRepository: new Repository(new CompanyRepository()),
}