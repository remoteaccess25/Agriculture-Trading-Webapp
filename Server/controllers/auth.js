const User = require('../models/user');
const { StatusCodes } = require('http-status-codes');
const { UnauthenticatedError } = require('../errors/index');
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    console.log(user)
    res.status(StatusCodes.CREATED)
        .json({ user: { name: user.name }, token })
}

const login = async (req, res)=>{
    // destructure the req.body
    const { email, password } = req.body

    // find the user using findOne method
    const user = await User.findOne({email})

    // throw error if user not present
    if (!user) {
        throw new UnauthenticatedError('No account with this email exists')
    }

    // check if the password if correct or not
    const isPasswordCorrect = await user.checkPassword(password)

    // throw error if the password is wrong
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Incorrect password.. Please try again')
    }
    
    // create token
    const token = user.createJWT()

    console.log(user)


    // send response
    res
        .status(StatusCodes.OK)
        .json({ user: { name: user.name }, token })
}

module.exports = {
    register,
    login
};
