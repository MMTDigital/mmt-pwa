const merge = require('webpack-merge')
const base = require('../base/webpack.base.config.js')
const shared = require('./webpack.dev.shared.config')
const server = require('./webpack.dev.server.config')
const client = require('./webpack.dev.client.config')

module.exports = [
  merge(base.shared, base.server, shared, server),
  merge(base.shared, base.client, shared, client)
]
