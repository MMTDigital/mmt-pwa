import React from 'react'
import { Provider } from 'constate'
import express from 'express'
import ssr from 'react-ssr'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import setCachePolicyForRequest from './middleware/setCachePolicyForRequest'
import staticResources from './middleware/staticResources'
import routes from '../routes'
import Html from './template'
import sw from '../sw'

const Providers = ({children}) => (
  <Provider>
    {children}
  </Provider>
)

const app = express()
const renderer = ssr({
  routes,
  Html,
  Providers
})

app.disable('x-powered-by')
app.enable('trust proxy')
app.use(staticResources(app, express))
app.use(helmet())
app.use(bodyParser.json({ limit: '2mb' }))
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }))

app.get('/sw.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript')
  res.send(sw)
})
app.get('/*', setCachePolicyForRequest, renderer)

export default app
