import client from '../services/redisClient';

async function clearRedisCache(req, res, next) {
    await next();

    client.del(JSON.stringify(req.user.id));
}

export default clearRedisCache;
