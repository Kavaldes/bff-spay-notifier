const winston = require('winston');
const { format, transports } = winston;
const DailyRotateFile = require('winston-daily-rotate-file');
const constants = require('./ConstantsConfig');

// Formato personalizado
const customFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level.toUpperCase()}: ${message}`;
});

// Configuración del logger
const logger = winston.createLogger({
  level: constants.logType,
  format: format.combine(
    format.timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
    customFormat,
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: `logs/${constants.appName}_%DATE%.log`,
      datePattern: 'DD-MM-YYYY',
      zippedArchive: true,
      maxSize: '200m',
      maxFiles: '14d',
    }),
  ],
});

module.exports = logger;
