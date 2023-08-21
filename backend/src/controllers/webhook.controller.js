const { StatusCodes } = require('http-status-codes')
const User = require('../models/user.model')

const webhookHandler = async (req, res) => {
    // const username = req.username

    // const user = await User.findOne({ username })
    // user.subscribed = true

    console.log(req)

    return res.status(StatusCodes.OK).json({ message: "User subscribed!" })
}

module.exports =  {
    webhookHandler
}