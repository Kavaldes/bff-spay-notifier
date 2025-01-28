const ApiError = require('./ApiError');

class NotFoundError extends ApiError {
  constructor(message) {
    super(`Error: ${message}`, 404);
    this.name = 'not found';
  }
}

module.exports = NotFoundError;
