const client = {
  test: /\.(png|jpg|jpeg|gif|webp)(\?v=\d+\.\d+\.\d+)?$/,
  rules: [
    {
      use: {
        loader: 'url-loader', // === DataURL
        options: {
          limit: 8192, // Will use file-loader over this limit
          publicPath: '/assets/',
          name: 'images/[name].[ext]?[hash]'
        }
      }
    },
    {
      use: {
        loader: 'img-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 85
          }
        }
      }
    }
  ]
}

let server = client

module.exports = {
  server,
  client
}
