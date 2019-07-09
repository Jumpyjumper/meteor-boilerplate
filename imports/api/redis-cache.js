import SequelizeRedis from 'sequelize-redis';
import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const redisClient = redis.createClient(Meteor.settings["redis-cache"].redis);
const redisCache = new SequelizeRedis(redisClient);

export {
    redisClient,
    redisCache
}