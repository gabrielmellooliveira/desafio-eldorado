const express = require('express')
const Controllers = require('../controllers')

const controller = Controllers.LoginController

const router = express.Router()

router.post('/', controller.post)

module.exports = router