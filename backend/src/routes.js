const routes = require('./routes/index')

const registerRoutes = (app) => {
  for (const route of routes) {
    app.use(route.name, route.router)
  }
}

module.exports = { registerRoutes }