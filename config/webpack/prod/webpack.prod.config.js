const merge = require('webpack-merge')
const base = require('../base/webpack.base.config')

const shared = require('./webpack.prod.shared.config')
const server = require('./webpack.prod.server.config')
const client = require('./webpack.prod.client.config')

module.exports = [
  merge(base.shared, base.server, shared, server),
  merge(base.shared, base.client, shared, client)
]
