const { resolve, join } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const sass = require('../loader-configs/sass')
const javascript = require('../loader-configs/javascript')
const svg = require('../loader-configs/svg')
const json = require('../loader-configs/JSON')
const html = require('../loader-configs/html')
const pdf = require('../loader-configs/pdf')
const md = require('../loader-configs/md')
const video = require('../loader-configs/video')

module.exports = {
  entry: {},
  output: {},
  stats: 'none',

  resolve: {
    modules: [
      'node_modules',
      resolve(__dirname, '../src/assets/styles')
    ],

    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.scss'
    ],

    alias: {
      'hiredis': join(__dirname, '../../hiredis.js')
      // '@vfuk/components': join(__dirname, '../../../../lib-web-components/lib')
    }
  },

  module: {
    rules: [
      sass.entryLoader,
      javascript.base,
      svg,
      json,
      html,
      pdf,
      md,
      video.client
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '../../build/assets/styles.css',
      allChunks: true,
      ignoreOrder: true
    })
  ]
}
