import WriteFileWebpackPlugin from 'write-file-webpack-plugin';

// Why I need WriteFileWebpackPlugin?
// Because I'm using copyWebpackPlugin, here: https://webpack.js.org/plugins/copy-webpack-plugin/#usage
export function writeFileWebpackPlugin() {
  return [
    new WriteFileWebpackPlugin()
  ];
}