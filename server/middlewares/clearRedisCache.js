const { clearHash } = require('../services/cache');

async function clearRedisCache(req, res, next) {
    await next();

    clearHash();
}

module.exports = clearRedisCache;
