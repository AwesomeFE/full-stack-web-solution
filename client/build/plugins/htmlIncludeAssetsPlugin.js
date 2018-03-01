import HtmlIncludeAssetsPlugin from 'html-webpack-include-assets-plugin';

export function htmlIncludeAssetsPlugin(options) {
  const { useServiceWorker } = options;
  const plugin = [];

  if(useServiceWorker) {
    plugin.push(new HtmlIncludeAssetsPlugin({
      assets: [
        // 'javascripts/sw.js'
      ],
      append: false
    }));
  }

  return plugin;
}