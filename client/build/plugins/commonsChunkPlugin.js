import webpack from 'webpack';

export function commonsChunkPlugin() {
  return [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    })
  ];
}