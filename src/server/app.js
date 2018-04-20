import React from 'react'
import { Provider } from 'constate'
import express from 'express'
import ssr from 'react-ssr'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import setCachePolicyForRequest from './middleware/setCachePolicyForRequest'
import staticResources from './middleware/staticResources'
import routes from '../routes'
import Html from './template'
import prefix from '../constants/pathPrefix'

const Providers = ({children}) => (
  <Provider>
    {children}
  </Provider>
)

const app = express()
const router = express.Router()
const renderer = ssr({
  routes,
  Html,
  Providers,
  cache: {
    mode: 'full',
    duration: 250,
    redisClient
  }
})

app.disable('x-powered-by')
app.enable('trust proxy')
app.use(staticResources(app, express))
app.use(helmet())
app.use(bodyParser.json({ limit: '2mb' }))
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }))
app.use(session)

app.get('/*', setCachePolicyForRequest, renderer)

export default app
