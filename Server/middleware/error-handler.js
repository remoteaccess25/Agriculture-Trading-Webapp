const CustomAPIError = require('../errors/custom-error');
const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {

    // create a customError object
    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, Please try again'

    }

    // validation error
    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors).map((item) => item.message).join(',')
        customError.statusCode = 400

    }

    // duplicate entry error
    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`
        customError.statusCode = 400
    }


    // send response
    return res
        .status(customError.statusCode)
        .json({ msg: customError.msg })

    // res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    //     .json({msg:err})
}


// export module
module.exports = errorHandlerMiddleware