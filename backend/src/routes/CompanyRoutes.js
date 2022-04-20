const express = require('express')
const Controllers = require('../controllers')

const controller = Controllers.CompanyController

const router = express.Router()

router.get('/', controller.get)
router.get('/:id', controller.getOne)
router.post('/', controller.post)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)

module.exports = router