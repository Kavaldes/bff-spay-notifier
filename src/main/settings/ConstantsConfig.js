require('dotenv').config();
const pkg = require('../../../package.json');

module.exports = {
  corsDns: process.env.CORS,
  profile: process.env.NODE_ENV,
  port: process.env.PORT,
  appName: pkg.name,
  appVersion: pkg.version,
  logType: process.env.LOG_TYPE,
  endpoints: {
    api_name: {
      local: '',
      docker: '',
      develop: '',
      qa: '',
      production: '',
    },
  },
};
