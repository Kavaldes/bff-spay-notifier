const ApiError = require('./ApiError');

class NotAuthorizedError extends ApiError {
  constructor(message) {
    super(`Error: ${message}`, 401);
    this.name = 'not authorized';
  }
}

module.exports = NotAuthorizedError;
