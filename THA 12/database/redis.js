//redis store /redis client

const redis = require('redis');
const connectRedis  = require('connect-redis');
const session = require('express-session');


const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
    host: 'localhost',
    port:6379
});

redisClient.on('error', function(err){
    console.log('could not connect to redis',err);
});

redisClient.on('connect', function(){
    console.log('connected to redis');
});

module.exports = {
    redisClient,
    RedisStore,
    session
}