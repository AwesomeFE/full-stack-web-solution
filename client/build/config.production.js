import webpackTask from './config.base'

export default [
  webpackTask({
    appName: 'admin',
    extract: true,
    minimize: true,
    sourceMap: false,
    useServiceWorker: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  webpackTask({
    appName: 'mobile',
    extract: true,
    minimize: true,
    sourceMap: false,
    useServiceWorker: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  webpackTask({
    appName: 'pc',
    extract: true,
    minimize: true,
    sourceMap: false,
    useServiceWorker: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  })
]
