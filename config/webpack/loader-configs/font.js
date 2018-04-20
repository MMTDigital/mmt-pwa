const path = require('path')
const merge = require('webpack-merge')

const client = {
  test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  include: path.resolve(__dirname, '../../../', 'node_modules/@vfuk/components/components/utilities/WebComponentsProvider'),
  use: {
    loader: 'file-loader',
    options: {
      publicPath: '/shop/assets/',
      name: 'fonts/[name].[ext]?[hash]'
    }
  }
}

let server = merge(client, {
  use: {
    options: {
      emitFile: false
    }
  }
})

module.exports = {
  server,
  client
}
