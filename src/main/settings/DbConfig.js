const { DataSource } = require('typeorm');
/** Importar y agregar Schemas de Tablas en parametro entities */

const mssqlDataSource = new DataSource({
  type: 'mssql',
  host: process.env.MSSQL_HOST,
  port: parseInt(process.env.MSSQL_PORT, 10),
  username: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  synchronize: true,
  logging: ['develop', 'qa', 'production'].includes(
    process.env.NODE_ENV || 'local',
  )
    ? false
    : true,
  entities: [],
  pool: {
    max: parseInt(process.env.MSSQL_POOL_MAX, 10) || 10,
    min: parseInt(process.env.MSSQL_POOL_MIN, 10) || 1,
    acquireTimeoutMillis: parseInt(process.env.MSSQL_POOL_TIMEOUT, 10) || 60000,
  },
  extra: {
    options: {
      enableArithAbort: true,
      trustServerCertificate: ['develop', 'qa', 'production'].includes(
        process.env.NODE_ENV || 'local',
      )
        ? false
        : true,
    },
  },
});

module.exports = { mssqlDataSource };