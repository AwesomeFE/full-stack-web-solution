import webpackTask from './config.base'

export default [
  webpackTask({
    appName: 'admin',
    chunkHash: '.[chunkhash]',
    extract: true,
    minimize: true,
    sourceMap: false,
    vendor: [
      'vue',
      'vuex',
      'vue-i18n',
      'vue-router',
      'vee-validate',
      'vue-class-component',
      'mqtt/dist/mqtt',
      'axios',
      'swiper/dist/js/swiper.js',
      'moment',
      'validator',
      'babel-polyfill',
      'perfect-scrollbar',
      'ua-parser-js'
    ]
  }),
  webpackTask({
    appName: 'mobile',
    chunkHash: '.[chunkhash]',
    extract: true,
    minimize: true,
    sourceMap: false,
    vendor: [
      'vue',
      'vuex',
      'vue-i18n',
      'vue-router',
      'vee-validate',
      'vue-class-component',
      'vue-property-decorator',
      'mqtt/dist/mqtt',
      'axios',
      'swiper/dist/js/swiper.js',
      'validator',
      'babel-polyfill',
      'perfect-scrollbar',
      'moment',
      'ua-parser-js'
    ]
  }),
  webpackTask({
    appName: 'pc',
    chunkHash: '.[chunkhash]',
    extract: true,
    minimize: true,
    sourceMap: false,
    vendor: [
      'vue',
      'vuex',
      'vue-i18n',
      'vue-router',
      'vee-validate',
      'vue-class-component',
      'vue-property-decorator',
      'mqtt/dist/mqtt',
      'axios',
      'swiper/dist/js/swiper.js',
      'validator',
      'babel-polyfill',
      'perfect-scrollbar',
      'moment',
      'ua-parser-js'
    ]
  })
]
