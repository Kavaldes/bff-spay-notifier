/* eslint-disable no-undef */
const { metrics } = require('../../../main/api/metrics/handler/metricsHandler');
const promClient = require('prom-client');
const ConverterResponse = require('../../../main/api/common/responseMapper');

// Mocks
jest.mock('prom-client', () => ({
  register: {
    metrics: jest.fn().mockResolvedValue('metrics data'),
  },
}));

jest.mock('../../../main/api/common/responseMapper', () => jest.fn());

describe('metrics handler', () => {
  let res;

  beforeEach(() => {
    // Setup para las respuestas simuladas
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      set: jest.fn()
    };
  });

  it('should call promClient.register.metrics and respond with metrics data', async () => {
    const req = {};

    // Llamar al handler
    await metrics(req, res);

    expect(promClient.register.metrics).toHaveBeenCalled();
  });

  it('should handle errors from promClient.register.metrics and call ConverterResponse with error', async () => {
    promClient.register.metrics.mockRejectedValue('error data');

    const req = {}; 

    // Llamar al handler
    await metrics(req, res);

    expect(promClient.register.metrics).toHaveBeenCalled();
    expect(ConverterResponse).toHaveBeenCalledWith(res, 'error data');
  });
});
