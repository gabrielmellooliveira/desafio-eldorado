const CarRoutes = require('./routes/CarRoutes')
const CompanyRoutes = require('./routes/CompanyRoutes')

module.exports = [
  { name: '/cars', router: CarRoutes },
  { name: '/companies', router: CompanyRoutes }
]