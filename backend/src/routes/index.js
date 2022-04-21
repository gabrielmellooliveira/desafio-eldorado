const CarRoutes = require('./CarRoutes')
const CompanyRoutes = require('./CompanyRoutes')

module.exports = [
  { name: '/cars', router: CarRoutes },
  { name: '/companies', router: CompanyRoutes }
]