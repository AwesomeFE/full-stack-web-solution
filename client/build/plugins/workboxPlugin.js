import path from 'path';
import WorkboxPlugin from 'workbox-webpack-plugin';

export function workboxPlugin(options) {
  const { useServiceWorker, appName } = options;
  const plugin = [];

  if(useServiceWorker) {
    plugin.push(new WorkboxPlugin({
      clientsClaim: true,
      skipWaiting: true
    }));
  }

  return plugin;
}