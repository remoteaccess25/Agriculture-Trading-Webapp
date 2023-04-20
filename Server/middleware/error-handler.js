const CustomAPIError = require('../errors/custom-error');
const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res
            .status(err.statusCode)
            .json({msg:err.message})
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({msg:err})
}










// const errorHandlerMiddleware = async (err, req, res, next) =>
//     res
//         .status(500)
//         .json({ msg: 'Something Went Wrong, Please Try Again......' })

module.exports = errorHandlerMiddleware