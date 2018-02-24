import webpack from 'webpack';

export function definePlugin(options) {
  const {
    appName
  } = options;

  return [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.SERVER_HOST': JSON.stringify(process.env.SERVER_HOST),
      'process.env.SERVER_PORT': JSON.stringify(process.env.SERVER_PORT),
      'process.env.DIST': JSON.stringify(`/public/${appName}`)
    })
  ];
}