const Repositories = require('../repositories')

const CarController = require('../controllers/CarController')
const CompanyController = require('../controllers/CompanyController')
const LoginController = require('../controllers/LoginController')

module.exports = {
  CarController: new CarController(Repositories.CarRepository),
  CompanyController: new CompanyController(Repositories.CompanyRepository),
  LoginController: new LoginController(Repositories.UserRepository)
}