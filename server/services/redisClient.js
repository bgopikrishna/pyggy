import redis from 'redis';
import util from 'util';

const redisUrl = process.env.REDIS_URL || 'redis://127.0.01:6379';
const client = redis.createClient(redisUrl);

client.hget = util.promisify(client.hget);

export default client;
