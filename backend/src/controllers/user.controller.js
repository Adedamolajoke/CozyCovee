const { NotFound, BadRequestError } = require('../errors')
const User = require('../models/user.model')
const { StatusCodes } = require('http-status-codes')


const getUserController = async (req, res) => {
    const userId = req.params.id

    const user = await User.findOne({ _id: userId })

    if (!user) throw new NotFound('No user found with this id')

    return res.status(StatusCodes).json({ user })
}

module.exports = {
    getUserController
}