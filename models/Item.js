const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    itemName: {
        type:       String,
        required:   true,
        unqiue:     true
    },
    itemSKU: {
        type:       String,
        required:   true
    },
    quantity: {
        type:       Number,
        default:    1,
    },
    createdAt: {
        type:       Date,
        default:    Date.now
    },
    updatedAt: {
        type:       Date,
        default:    Date.now
    }
})

module.exports = mongoose.model("item", itemSchema)