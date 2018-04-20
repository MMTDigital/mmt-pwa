const config = {
  http: {
    port: 8000,
    robots: 'User-agent: *\nDisallow:',
    methodWhiteList: ['GET', 'POST', 'HEAD', 'PUT', 'DELETE']
  },
  dalUrl: process.env.NODE_ENV === 'local' ? 'localhost:6180' : process.env.DAL_URL,
  dalApiKey: process.env.DAL_API_KEY,
  authenticationSecret: process.env.DAL_AUTHENTICATION_SECRET,
  redisUrl: process.env.NODE_ENV === 'local' ? '127.0.0.1' : process.env.REDIS_URL,
  redisPort: process.env.NODE_ENV === 'local' ? 6379 : process.env.REDIS_PORT
}

export default config
