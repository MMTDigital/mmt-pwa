const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
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
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'MMTPWA',
      short_name: 'MMTPWA',
      description: 'Manage your MMT Management in this PWA!',
      background_color: '#ffffff',
      theme_color: '#ec2821',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: resolve('src/assets/mmt.png'),
          size: '1024x1024'
        }
      ]
    }),

    // new ServiceWorkerWebpackPlugin({
    //   entry: absolute('src/sw.js'),
    //   publicPath: '/assets/'
    // }),

    new CopyWebpackPlugin([{
      from: absolute('src/assets'),
      to: '.'
    }, {
      from: absolute('src/sw.js'),
      to: '.'
    }])
  ]
}
