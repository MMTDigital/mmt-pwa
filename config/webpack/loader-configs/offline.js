module.exports = {
  test: /offline.js?$/,
  loaders: [
    {
      loader: 'file-loader',
      options: {
        publicPath: '/assets/',
        name: '[name].js'
      }
    },
    'babel-loader'
  ]
}
