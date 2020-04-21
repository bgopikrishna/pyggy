/* eslint-disable func-names */
import mongoose from 'mongoose';
import redisClient from './redisClient';

// eslint-disable-next-line prefer-destructuring
const exec = mongoose.Query.prototype.exec;

const client = redisClient;

mongoose.Query.prototype.cache = function(options = {}) {
    const { key = '', timeOut } = options;

    this._useCache = true;
    this._hashkey = key;
    this._timeOut = timeOut;

    return this;
};

mongoose.Query.prototype.exec = async function() {
    if (!this._useCache) {
        // eslint-disable-next-line prefer-rest-params
        return exec.apply(this, arguments);
    }

    const key = JSON.stringify({
        ...this.getQuery(),
        collection: this.mongooseCollection.name
    });

    const cachedValue = await client.hget(this._hashkey, key);

    if (cachedValue) {
        const doc = JSON.parse(cachedValue);

        if (!Array.isArray(doc)) {
            return doc;
        }

        return doc.map((d) => this.model(d));
    }

    // If there is no cached value
    // eslint-disable-next-line prefer-rest-params
    const result = await exec.apply(this, arguments);

    if (this._timeOut && !Number.isNaN(this._timeOut)) {
        const exptime = parseInt(this._timeOut, 10);
        client.hset(this._hashkey, key, JSON.stringify(result), 'EX', exptime);
    } else {
        client.hset(this._hashkey, key, JSON.stringify(result));
    }

    return result;
};
