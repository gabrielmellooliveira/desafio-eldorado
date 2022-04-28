// require('dotenv').config({
//   path: process.env.NODE_ENV.trim() === 'test' ? '.env.testing' : '.env'
// })

const express = require('express')
const cors = require('cors')

const auth = require('./middlewares/auth')
const LoginRoutes = require('./routes/LoginRoutes')

const { registerRoutes } = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/login', LoginRoutes)

app.use(auth)

registerRoutes(app)

module.exports = app