const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const messages = require('./dev-messages')

module.exports = {
  watch: true,

  plugins: [
    new webpack.NamedModulesPlugin(),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          messages[Math.floor(Math.random() * messages.length)]
        ]
      }
    })
  ]
}
