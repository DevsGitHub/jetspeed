const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    sellerId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Product', productsSchema)