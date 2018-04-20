import expressSession from 'express-session'
import Redis from 'ioredis'
import store from 'connect-redis'

const RedisStore = store(expressSession)
const redisNode = {
  port: 6379,
  host: '127.0.0.1'
}

const url = `redis://127.0.0.1:6379/0`
const redisClient = new Redis({...redisNode, url})
redisClient.on('connect', () => {
  console.info('connected')
})

redisClient.on('error', (err, data) => {
  console.info('Redis error occured... ', err, data)
})

const redisOptions = {
  client: redisClient,
  host: '127.0.0.1',
  port: 6379,
  logErrors: true
}

const session = expressSession({
  store: new RedisStore(redisOptions),
  secret: 'shakespearian',
  saveUninitialized: false,
  resave: false,
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false
    // maxAge: 24 * 60 * 60 * 1000 // 1 day - hrs, mins, secs, millisecs
  }
})

export {
  redisClient
}

export default session
