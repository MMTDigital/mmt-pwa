const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const image = require('../loader-configs/image')
const font = require('../loader-configs/font')
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
    rules: [image.client, font.client]
  },

  node: {
    net: 'mock',
    tls: 'mock'
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: resolve(__dirname, '../../../src/shared/assets'),
      to: '.'
    }])
  ]
}
