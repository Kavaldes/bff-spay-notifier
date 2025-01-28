
const dbConfig = require('../../settings/DbConfig');
const log = require('../../settings/LoggerConfig');

async function initializeMssql() {
  await dbConfig.mssqlDataSource
    .initialize()
    .then((result) =>
      log.info('Mssql DB connected with connection pool', result),
    )
    .catch((error) => log.error('Error connecting to Mssql DB:', error));
}

module.exports = { initializeMssql };
