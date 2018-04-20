module.exports = {
  test: /\.html$/,
  use: {
    loader: 'html-loader',
    options: {
      publicPath: '/',
      name: 'templates/[name].[ext]'
    }
  }
}
