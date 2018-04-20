const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const baseLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: 'vfuk-[name]__[local]',
      include: /flexboxgrid/,
      sourceMap: true
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      parser: 'postcss-scss',
      plugins: [
        autoprefixer({
          browsers: [
            'last 2 versions',
            'IE >= 11',
            'safari >= 10'
          ]
        })
      ]
    }
  },
  {
    loader: 'sass-loader',
    options: {
      outputStyle: 'expanded'
    }
  },
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        './node_modules/@vfuk/components/resources/resources.scss',
        './src/shared/styles/resources.scss'
      ]
    }
  }
]

const entryLoader = {
  test: /\.(css|scss)(\?.+)?$/,
  loaders: ExtractTextPlugin.extract({
    use: baseLoaders
  })
}

module.exports = {
  entryLoader,
  baseLoaders
}
