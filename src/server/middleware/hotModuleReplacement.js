// Potential HMR solution
// add react-hot-loader, use webpack.HotModuleReplacementPlugin()
// add the webpack-hot-middleware/client to the entry
// Has been left for now because it interferes with SSR
// we need to update client and server bundles simultaneously
//
// Chuck the below in app.js to test
// if (process.env.NODE_ENV === 'local') {
//   const { devMiddleware, hotMiddleware } = require('./middleware/hotModuleReplacement')
//   app.use(devMiddleware)
//   app.use(hotMiddleware)
// }
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const configs = require(process.cwd() + '/config/webpack/local/webpack.local.config')
const config = configs[1]
const compiler = require('webpack')(config)

const devMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: '/'
})

const hotMiddleware = webpackHotMiddleware(compiler)

module.exports = {
  devMiddleware,
  hotMiddleware
}
