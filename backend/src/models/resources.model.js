const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Please provide a category']
    },
    name: {
        type: String
    },
})

module.exports = mongoose.model('Resource', resourceSchema)