import HtmlWebpackPlugin from 'html-webpack-plugin';

export function htmlWebpackPlugin() {
  return [
    new HtmlWebpackPlugin({
      chunks: ['app', 'vendor', 'importSW', 'manifest'],
      template: './client/index.html',
      filename: `./index.html`,
      inject: true
    })
  ];
}