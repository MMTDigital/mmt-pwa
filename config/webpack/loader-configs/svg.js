// const js = {
//   test: /\.svg$/,
//   rules: [
//     { use: 'raw-loader' },
//     { use: 'img-loader' }
//   ]
// }

// const scss = {
//   test: /\.svg$/,
//   issuer: /\.scss$/,
//   rules: [
//     { use: 'url-loader' },
//     { use: 'img-loader' }
//   ]
// }

module.exports = {
  test: /\.svg$/,
  use: 'svg-inline-loader'
}
