const { NotFound, BadRequestError } = require('../errors')
const Session = require('../models/session.model')
const User = require('../models/user.model')
const { StatusCodes } = require('http-status-codes')

const getAllTherapists = async (req, res) => {
    
    const therapists = await User.find({ role: 'Therapist' })

    return res.status(StatusCodes.OK).json({ therapists })
}

const createSession = async (req, res) => {
    const userId = req.id
    const therapistId = req.params.id

    const session = await Session.create({
        therapist_id: therapistId,
        client_id: userId,
        date: moment().add(1, 'day').toString()
    })

    return res.status(StatusCodes.CREATED).json({ session })
}

module.exports = {
    getAllTherapists,
    createSession
}