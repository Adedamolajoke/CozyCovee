const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
    therapist_id: {
        type: mongoose.Types.ObjectId,
        required: [true, 'Provide therapist id']
    },
    client_id: {
        type: String,
        required: [true, 'Provide client id']
    },
    date: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Resource', sessionSchema)