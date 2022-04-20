const Repository = require('./Repository')

const CarRepository = require('./CarRepository')
const CompanyRepository = require('./CompanyRepository')
const UserRepository = require('./UserRepository')

module.exports = {
  CarRepository: new Repository(new CarRepository()),
  CompanyRepository: new Repository(new CompanyRepository()),
  UserRepository: new Repository(new UserRepository())
}