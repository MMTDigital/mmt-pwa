import { Server } from 'http'
import config from './config'
import app from './app'

const server = new Server(app)

server.listen(config.http.port)
