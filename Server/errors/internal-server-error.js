const CustomAPIError = require('../../../VS Code/Web D/Projects/Job-Api/errors/custom-errors');
const { StatusCodes } = require('http-status-codes');

class InternalServerError extends CustomAPIError{
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    }
}

module.exports = InternalServerError
