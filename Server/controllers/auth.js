const User = require('../models/user');
const { StatusCodes } = require('http-status-codes');
const { UnauthenticatedError } = require('../errors/errors');
const { admin } = require('./access-key');

const register = async (req, res) => {

    // check if the key provided is correct key or not
    if (!admin(req.body.accessKey)) {
        throw new UnauthenticatedError('Invalid AccessKey')
    }

    // delete the accessKey from the body..

    // delete req.body.accessKey // not needed as we creating user with mongoose schema

    // create user
    const user = await User.create({ ...req.body })

  
    res.status(StatusCodes.CREATED)
        .json({ user: { name: user.name }, acessGranted: true })
    // .redirect()
}

const login = async (req, res) => {

    // destructure the req.body
    const { email, password } = req.body

    // find the user using findOne method
    const user = await User.findOne({ email })

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


    res
        .status(StatusCodes.OK)
        .json({ user: { name: user.name }, token })
}

module.exports = {
    register,
    login
};
