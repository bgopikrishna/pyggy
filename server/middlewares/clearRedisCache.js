import { clearHash } from '../services/cache';

async function clearRedisCache(req, res, next) {
    await next();

    clearHash();
}

export default clearRedisCache;
