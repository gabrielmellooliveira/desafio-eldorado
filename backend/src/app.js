const express = require('express')

const auth = require('./middlewares/auth')
const LoginRoutes = require('./routes/LoginRoutes')

const { registerRoutes } = require('./routes')

const app = express()

app.use(express.json())

app.use('/login', LoginRoutes)

app.use(auth)

registerRoutes(app)

module.exports = app