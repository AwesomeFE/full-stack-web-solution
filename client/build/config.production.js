import webpackTask from './config.base'

export default [
  webpackTask({
    appName: 'admin',
    chunkHash: '.[chunkhash]',
    extract: true,
    minimize: true,
    sourceMap: false,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  webpackTask({
    appName: 'mobile',
    chunkHash: '.[chunkhash]',
    extract: true,
    minimize: true,
    sourceMap: false,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  webpackTask({
    appName: 'pc',
    chunkHash: '.[chunkhash]',
    extract: true,
    minimize: true,
    sourceMap: false,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  })
]
