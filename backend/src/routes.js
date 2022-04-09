const CarRoutes = require('./routes/CarRoutes')

const registerRoutes = (app) => {
  app.use('/cars', CarRoutes)
}

module.exports = { registerRoutes }