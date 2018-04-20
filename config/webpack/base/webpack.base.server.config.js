const { resolve } = require('path')
const image = require('../loader-configs/image')
const font = require('../loader-configs/font')
const nodeExternals = require('./../../externals')
const absolute = file => resolve(__dirname, '../../../', file)

module.exports = {
  entry: {
    index: [
      absolute('src/shared/server')
    ]
  },

  output: {
    path: resolve(process.cwd(), 'build/server'),
    filename: 'index.js'
  },

  target: 'node',

  node: {
    console: 'mock',
    net: 'mock',
    tls: 'mock'
  },

  module: {
    rules: [font.server, image.server]
  },

  plugins: [
    // new CopyWebpackPlugin([{
    //   from: path.resolve(process.cwd(), 'src/static'),
    //   to: './static'
    // }])
  ],

  externals: [
    nodeExternals({
      modulesFromAnywhere: true,
      whitelist: function (name) {
        if (name && name.indexOf('appdynamics') > -1) {
          return false
        }

        return true
      }
    })
  ]
}
