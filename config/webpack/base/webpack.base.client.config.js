const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const image = require('../loader-configs/image')
const font = require('../loader-configs/font')
const offline = require('../loader-configs/offline')
const absolute = file => resolve(__dirname, '../../../', file)

module.exports = {
  entry: {
    bundle: [
      absolute('src/index.js')
    ]
  },

  output: {
    path: absolute('build/assets'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      image.client,
      font.client,
      offline
    ]
  },

  node: {
    net: 'mock',
    tls: 'mock'
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: resolve(__dirname, '../../../src/assets'),
      to: '.'
    }, {
      from: resolve(__dirname, '../../../src/offline.js'),
      to: '.'
    }])
  ]
}
