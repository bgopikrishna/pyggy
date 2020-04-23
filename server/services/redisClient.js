const redis = require('redis');
const util = require('util');

const redisUrl = process.env.REDIS_URL || 'redis://127.0.01:6379';
let client;

if (process.env.NODE_ENV !== 'development') {
    client = redis.createClient(6380, process.env.REDISCACHEHOSTNAME, {
        auth_pass: process.env.REDISCACHEKEY,
        tls: { servername: process.env.REDISCACHEHOSTNAME }
    });
} else {
    client = redis.createClient(redisUrl);
}

client.hget = util.promisify(client.hget);

module.exports = client;
