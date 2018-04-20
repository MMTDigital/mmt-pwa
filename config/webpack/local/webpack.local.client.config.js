const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: [
    path.resolve(process.cwd(), 'src')
  ],

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new StyleLintPlugin(),

    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // `disabled`, `static` or `server`,
      analyzerPort: 1111,
      reportFilename: '../../reporting/webpack-bundle-analyser.html',
      logLevel: 'silent'
    })
  ]
}
