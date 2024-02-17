const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type:       String,
        required:   true,
        unqiue:     true
    },
    firstName: {
        type:       String,
        required:   true
    },
    lastName: {
        type:       String,
        required:   true
    },
    password: {
        type:       String,
        default:    "password12345",
    },
    loginAttempts: {
        type:       Number,
        default:    0,
    }
})

module.exports = mongoose.model("user", userSchema)