const { StatusCodes } = require("http-status-codes");
const CustomError = require("./custormError");

class ServerError extends CustomError {
  constructor(
    name,
    statusCode = StatusCodes.UNAUTHORIZED,
    isOperational = true,
    message = "Internal Server Error"
  ) {
    super(name, statusCode, isOperational, message);
  }
}

module.exports = ServerError;
