import Redis from 'ioredis'

const redis = new Redis({
    host:process.env.REDIS_END_PONT,
    port:parseInt(process.env.REDIS_PORT),
    password:process.env.REDIS_PASSWORD
})

redis.on('connect', () => {
    console.log("Redis is connected successfully");
    
})

redis.on('errr', () => {
    console.log("error from Redis config",error);
    
})

export default redis;