const ApiError = require('./ApiError');

class BadRequestError extends ApiError {
  constructor(message) {
    super(message, 400);
    this.name = 'bad request';
  }
}

module.exports = BadRequestError;
