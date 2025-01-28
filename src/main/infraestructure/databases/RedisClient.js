const ApiError = require('../../settings/errors/ApiError');
const redisClient = require('../../settings/RedisConfig');

class RedisClient {
  static async get(key) {
    try {
      return await redisClient.get(key);
    } catch (error) {
      throw new ApiError(`Error getting value for key ${key}: ${error.message}`);
    }
  }

  static async set(key, value) {
    try {
      await redisClient.set(key, value);
    } catch (error) {
      throw new ApiError(`Error setting value for key ${key}: ${error.message}`);
    }
  }

  static async remove(key) {
    try {
      await redisClient.del(key);
    } catch (error) {
      throw new ApiError(`Error removing key ${key}: ${error.message}`);
    }
  }
}

module.exports = RedisClient;