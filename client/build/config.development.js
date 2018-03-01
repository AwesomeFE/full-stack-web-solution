import webpackTask from './config.base';

export default [
  webpackTask({
    appName: 'admin',
    chunkHash: '',
    extract: false,
    minimize: false,
    sourceMap: true,
    isHotReplace: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  webpackTask({
    appName: 'mobile',
    chunkHash: '',
    extract: false,
    minimize: false,
    sourceMap: true,
    isHotReplace: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  webpackTask({
    appName: 'pc',
    chunkHash: '',
    extract: false,
    minimize: false,
    sourceMap: true,
    isHotReplace: true,
    useServiceWorker: false,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  })
];