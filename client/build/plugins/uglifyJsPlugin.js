import webpack from 'webpack';

export function uglifyJsPlugin(options) {
  const { sourceMap, minimize } = options;
  const plugin = [];

  if(minimize) {
    plugin.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap,
      compress: {
        warnings: sourceMap
      }
    }));
  }

  return plugin;
}