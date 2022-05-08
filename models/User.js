const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,  //remove space
        unique: 1
    },
    password: {
        type: String,
        minlength:  5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role : {
        type: Number,   // 1 or 0 (admin or guest)
        default: 0
    },
    image : String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports = {User}
