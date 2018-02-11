import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default (options) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: options.minimize,
      sourceMap: options.sourceMap
    }
  }

  if(options.extract) {
    return ExtractTextPlugin.extract({
      use: [cssLoader],
      fallback: 'vue-style-loader'
    })
  }

  return ['vue-style-loader', cssLoader]
}