const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    product_name: {
        type: String,
        require: true
    },
    sellerId: {
        type: String,
        require: true
    },
    product_price: {
        type: Number,
        require: true
    },
    product_available: {
        type: Number,
        require: true
    },
    created: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productsSchema)