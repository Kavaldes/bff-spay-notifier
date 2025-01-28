const Redis = require('ioredis');

const redisConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD ,
  connectTimeout: process.env.REDIS_CONNECTION_TIMEOUT,
  tls: process.env.REDIS_TLS 
};

module.exports = new Redis(redisConfig);