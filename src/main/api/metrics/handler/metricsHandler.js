const ConverterResponse = require('../../common/responseMapper');
const { StatusCodes } = require('http-status-codes');
const promClient = require('prom-client');

const metrics = async (req, res) => {
  return await promClient.register
    .metrics()
    .then((data) => {
      res.set('Content-Type', 'text/plain');
      return res.status(StatusCodes.OK).send(data);
    })
    .catch((error) => ConverterResponse(res, error));
};

module.exports = {
  metrics,
};
