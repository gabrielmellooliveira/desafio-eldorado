const express = require('express')
const CarController = require('../controllers/CarController')

const router = express.Router()

router.get('/', CarController.get)
router.get('/:id', CarController.getOne)
router.post('/', CarController.post)
router.put('/:id', CarController.put)
router.delete('/:id', CarController.delete)

module.exports = router