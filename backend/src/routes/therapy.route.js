const express = require('express')
const { getAllTherapists, createSession } = require('../controllers/therapy.controller')
const router = express.Router()

router.route('/').get(getAllTherapists)
router.route('/:id/session').post(createSession)

module.exports = router