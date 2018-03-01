import CopyWebpackPlugin from 'copy-webpack-plugin';

// Why I need CopyWebpackPlugin?
// For use workbox javascript library, here: https://github.com/GoogleChrome/workbox/issues/672
export function copyWebpackPlugin(options) {
  const { appName } = options;

  return [
    new CopyWebpackPlugin([
      {
        from: `./client/src/${appName}/assets/lib/workbox-sw.prod.v2.1.2.js`,
        to: `javascripts/workbox-sw.prod.v2.1.2.js`
      },
      {
        from: `./client/src/${appName}/assets/lib/workbox-sw.prod.v2.1.2.js.map`,
        to: `javascripts/workbox-sw.prod.v2.1.2.js.map`
      }
    ])
  ];
}