import path from 'path';
import * as loaders from './loaders';
import * as plugins from './plugins';

export default (options) => {
  const {
    appName,
    chunkHash = '',
    sourceMap = true,
    vendor
  } = options;

  return {
    entry: {
      app: `./client/src/${appName}/main.js`,
      vendor
    },
    output: {
      path: path.join(__dirname, `../dist/${appName}/`),
      publicPath: `/public/${appName}/`,
      filename: `javascripts/[name]${chunkHash}.js`
    },
    resolve: {
      extensions: [
        '.js',
        '.vue'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue/,
          use: loaders.vueLoader(options)
        },
        {
          test: /\.js/,
          use: loaders.babelLoader(options),
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: loaders.cssLoader(options)
        },
        {
          test: /\.scss$/,
          use: loaders.scssLoader(options)
        },
        {
          test: /\.less$/,
          use: loaders.lessLoader(options)
        },
        {
          test: /\.png$|\.jpg$|\.gif$/,
          use: loaders.imageLoader(options)
        },
        {
          test: /\.(woff2|woff|eot|svg|ttf)(\?v=\d+\.\d+\.\d+)?$/,
          use: loaders.fontLoader(options)
        }
      ]
    },
    plugins: [
      ...plugins.cleanPlugin(options),
      ...plugins.definePlugin(options),
      ...plugins.uglifyJsPlugin(options),
      ...plugins.extractTextPlugin(options),
      ...plugins.htmlWebpackPlugin(options),
      ...plugins.commonsChunkPlugin(options),
      ...plugins.hotModuleReplacementPlugin(options),
    ],
    devtool: sourceMap ? 'source-map' : undefined
  }
}