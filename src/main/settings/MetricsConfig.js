const client = require('prom-client');
const constants = require('./ConstantsConfig');

const collectDefaultMetrics = client.collectDefaultMetrics;

const loadMetrics = () => {
  return collectDefaultMetrics({
    labels: {
      Application: constants.appName,
    },
  });
};

module.exports = { loadMetrics };
