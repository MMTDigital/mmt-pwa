const StartServerPlugin = require('start-server-webpack-plugin')
const ReloadServerPlugin = require('reload-server-webpack-plugin')

module.exports = {
  devtool: 'cheap-eval-source-map',

  module: {
    // removes dirty warnings we don't care about locally
    noParse: [
      /.\/middleware\/hotModuleReplacement/,
      /node_modules\/encoding\/lib\/iconv-loader.js/,
      /node_modules\/express\/lib\/view.js/
    ]
  },

  plugins: [
    new StartServerPlugin({
      name: 'index.js',
      nodeArgs: ['--inspect', '--preserve-symlinks']
    }),

    new ReloadServerPlugin({
      script: '../../../src/server'
    })
  ]
}
