import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default (options) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: options.minimize,
      sourceMap: options.sourceMap
    }
  };

  // https://github.com/bholloway/resolve-url-loader#source-maps-required
  const scssLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: true
    }
  };

  const resolveUrlLoader = {
    loader: 'resolve-url-loader'
  };

  if(options.extract) {
    return ExtractTextPlugin.extract({
      use: [cssLoader, resolveUrlLoader, scssLoader],
      fallback: 'vue-style-loader'
    });
  }

  return ['vue-style-loader', cssLoader, resolveUrlLoader, scssLoader];
}