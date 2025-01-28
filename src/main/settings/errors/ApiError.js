class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'internal server error';
    this.status = status || 500;
  }
}

module.exports = ApiError;
