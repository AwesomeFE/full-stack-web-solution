import webpack from 'webpack';

export function commonsChunkPlugin() {
  return [
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor',
      minChunks(module) {
        return module.context && module.context.includes('node_modules');
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ];
}