const mongoose = require('mongoose')


const accountSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Todo',accountSchema)