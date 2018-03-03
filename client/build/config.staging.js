import webpackTask from './config.base'

export default [
  webpackTask({
    appName: 'admin',
    extract: false,
    minimize: false,
    sourceMap: true,
    useServiceWorker: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  webpackTask({
    appName: 'mobile',
    extract: false,
    minimize: false,
    sourceMap: true,
    useServiceWorker: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  webpackTask({
    appName: 'pc',
    extract: false,
    minimize: false,
    sourceMap: true,
    useServiceWorker: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  })
]
