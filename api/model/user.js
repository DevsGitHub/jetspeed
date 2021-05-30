const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile: {
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
        select: false
    },
    active: {
        type: Boolean,
        require: true,
        default: true
    },
    created: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User', usersSchema)