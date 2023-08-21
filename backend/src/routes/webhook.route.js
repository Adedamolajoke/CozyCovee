const express = require('express')
const { webhookHandler } = require("../controllers/webhook.controller")
const router = express.Router()

router.route('/').get(webhookHandler)

module.exports = router