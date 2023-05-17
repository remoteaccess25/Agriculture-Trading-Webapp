const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength:50
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email'],
        unique:true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength:8,
    },
    contactNum: {
        type: Number,
        required: [true, `Contact number must be provided`],
        match: [/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, 'Enter valid Phone Number']
    }
})



userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    
    next()
})

userSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id, name: this.name },
        process.env.JWT_STRING,{expiresIn:process.env.JWT_LIFETIME})
}

userSchema.methods.checkPassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}


module.exports = mongoose.model('User',userSchema)
