import { resolve } from 'path'
import expressStaticGzip from 'express-static-gzip'
import pathPrefix from '../../constants/pathPrefix'
const oneDay = 86400000

const staticResources = (app, express) => {
  let enableBrotli = true
  let staticPath = resolve(process.cwd(), '/build/assets')

  if (process.env.NODE_ENV === 'local') {
    enableBrotli = false
    staticPath = resolve(process.cwd(), 'build/assets')
  }

  app.use(`${pathPrefix}/assets`, expressStaticGzip(staticPath, {
    maxAge: oneDay * 1,
    enableBrotli,
    setHeaders: (res) => {
      res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString())
    }
  }))

  return (req, res, next) => {
    next()
  }
}

export default staticResources
