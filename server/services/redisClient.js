// const redis = require('redis');
// const util = require('util');
/**
 * Commenting out redis code for deploying to heroku (As it's not availabe for free plan)
 */
// const redisUrl = process.env.REDIS_URL || 'redis://127.0.01:6379';
// let client;
// try {
//     if (process.env.NODE_ENV === 'production') {
//         client = redis.createClient(6380, process.env.REDISCACHEHOSTNAME, {
//             auth_pass: process.env.REDISCACHEKEY,
//             tls: { servername: process.env.REDISCACHEHOSTNAME }
//         });
//     } else {
//         client = redis.createClient(redisUrl);
//     }

//     client.hget = util.promisify(client.hget);
// } catch (error) {
//     console.error(error.message);
// }

// module.exports = client;
