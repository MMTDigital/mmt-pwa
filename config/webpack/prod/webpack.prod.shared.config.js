// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  plugins: [
    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.css$/g,
    //   cssProcessor: require('cssnano'),
    //   cssProcessorOptions: { discardComments: { removeAll: true } },
    //   canPrint: true
    // })
  ],
  externals: [
    nodeExternals({
      whitelist: function (name) {
        if (name && name.indexOf('appdynamics') > -1) {
          return false
        }

        return true
      }
    })
  ]
}
