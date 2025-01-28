const { StatusCodes } = require('http-status-codes');

// Estrategia base
class ResponseStrategy {
  handle(data) {
    return {
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      data: {
        name: data.name,
        message: 'An unexpected error occurred',
      },
      stack: data.stack || null,
    };
  }
}

// Estrategia para 401 Not Authorized
class UnauthorizedStrategy extends ResponseStrategy {
  handle(data) {
    return {
      code: StatusCodes.UNAUTHORIZED,
      data: {
        name: data.name,
        message: data.message,
      },
      stack: data.stack || null,
    };
  }
}

// Estrategia para 404 Not Found
class NotFoundStrategy extends ResponseStrategy {
  handle(data) {
    return {
      code: StatusCodes.NOT_FOUND,
      data: {
        name: data.name,
        message: data.message,
      },
      stack: data.stack || null,
    };
  }
}

// Estrategia para 400 Bad Request
class BadRequestStrategy extends ResponseStrategy {
  handle(data) {
    return {
      code: StatusCodes.BAD_REQUEST,
      data: {
        name: data.name,
        message: data.message,
      },
    };
  }
}

// Estrategia para 503 Service Unavailable
class ServiceUnavailableStrategy extends ResponseStrategy {
  handle(data) {
    return {
      code: StatusCodes.SERVICE_UNAVAILABLE,
      data: {
        name: data.name,
        message: 'Service unavailable, please try again later',
      },
      stack: data.stack || null,
    };
  }
}

// Estrategia para respuestas exitosas
class SuccessStrategy extends ResponseStrategy {
  handle(data) {
    return {
      code: StatusCodes.OK,
      data,
      stack: null,
    };
  }
}

// Estrategia para respuestas con contenido nulo o vacío
class NoContentStrategy extends ResponseStrategy {
  handle() {
    return {
      code: StatusCodes.NO_CONTENT,
      data: null,
      stack: null,
    };
  }
}

// Manejador de estrategias
function getStrategy(data) {
  if (data instanceof Error) {
    if (/not authorized/i.test(data)) {
      return new UnauthorizedStrategy();
    } else if (/not found|found/i.test(data)) {
      return new NotFoundStrategy();
    } else if (/badrequest|bad request/i.test(data)) {
      return new BadRequestStrategy();
    } else if (data.status === StatusCodes.SERVICE_UNAVAILABLE) {
      return new ServiceUnavailableStrategy();
    }
    return new ResponseStrategy();
  } else if (data === null || (Array.isArray(data) && data.length === 0)) {
    return new NoContentStrategy();
  } else {
    return new SuccessStrategy();
  }
}

function converter(res, data) {
  const strategy = getStrategy(data);
  const response = strategy.handle(data);
  return res.status(response.code).json(response.data);
}

module.exports = converter;
